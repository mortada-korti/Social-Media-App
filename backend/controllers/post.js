import db from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const sql =
      "SELECT p.*, u.first_name, u.last_name, u.profilePic FROM posts p JOIN users u ON u.id = p.userId LEFT JOIN relationships r ON r.followedUserId = p.userId WHERE (p.userId = ? OR r.followerUserId = ?) ORDER BY p.createdAt DESC";
    db.query(sql, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid!");
    const sql =
      "INSERT INTO posts(`desc`, `img`, `userId`, `createdAt`) VALUES(?)";
    const values = [
      req.body.desc,
      req.body.img,
      userInfo.id,
      moment(Date.now()).format("YYYY-MM-DD HH-mm-ss"),
    ];
    db.query(sql, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post added successfully");
    });
  });
};
