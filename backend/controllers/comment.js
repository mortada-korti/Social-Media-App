import mysql from "mysql";
import db from "../connect.js";
export const getComments = (req, res) => {
  const sql =
    "SELECT c.*, p.id as postId, u.first_name, u.last_name, u.profilePic FROM comments c JOIN posts p ON c.postId = p.id JOIN users u ON c.userId = u.id WHERE p.id = ?";
  db.query(sql, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
