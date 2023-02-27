import jwt from "jsonwebtoken";
import db from "../connect.js";

export const getFollowers = (req, res) => {
  const sql =
    "SELECT followerUserId FROM relationships WHERE followedUserId = ?";
  db.query(sql, req.query.userId, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((user) => user.followerUserId));
  });
};

export const followUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Token not valid");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Not logged in");
    const sql =
      "INSERT INTO relationsships WHERE followerUserId = ? AND followedUserId = ?";
    db.query(sql, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User Followed Successfully");
    });
  });
};
export const unfollowUser = (req, res) => {};
