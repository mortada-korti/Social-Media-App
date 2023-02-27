import jwt from "jsonwebtoken";
import db from "../connect.js";

export const getLikes = (req, res) => {
  const sql = "SELECT userId FROM likes WHERE postId = ?";
  db.query(sql, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((like) => like.userId));
  });
};

export const addLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Token is invalid");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    //
    if (err) return res.status(403).json("Not Logged in");

    const sql = "INSERT INTO likes(`userId`, `postId`) VALUES(?)";
    const values = [userInfo.id, req.body.postId];

    db.query(sql, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Like added successfully");
    });
    //
  });
};

export const deleteLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Token is invalid");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Not Logged in");

    const sql = "DELETE FROM likes WHERE userId = ? AND postId = ?";

    db.query(sql, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Like removed successfully");
    });
  });
};
