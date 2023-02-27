import mysql from "mysql";
import db from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req, res) => {
  const sql =
    "SELECT c.*, u.first_name, u.last_name, u.profilePic FROM comments c JOIN users u ON c.userId = u.id WHERE c.postId = ? ORDER BY c.createdAt DESC";
  db.query(sql, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addComment = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid");
    const sql =
      "INSERT INTO comments(`desc`, `userId`, `postId`, `createdAt`) VALUES(?)";
    const values = [
      req.body.desc,
      userInfo.id,
      req.body.postId,
      moment(Date.now()).format("YYYY-MM-DD HH-mm-ss"),
    ];
    db.query(sql, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Commend Added");
    });
  });
};
