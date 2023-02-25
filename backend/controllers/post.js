import db from "../connect.js";
export const getPosts = (req, res) => {
  const sql =
    "SELECT u.first_name, u.last_name, u.profilePic , p.* FROM users u JOIN posts p WHERE u.id = p.userId";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
