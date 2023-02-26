import db from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  // Check if user already exists
  db.query(sql, [req.body.email], (err, data) => {
    //
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists");
    if (req.body.password !== req.body.confirm_password)
      return res.status(400).json("Passwords does not match");

    // Create new user
    // // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const sql =
      "INSERT INTO users(`first_name`, `last_name`, `email`, `password`) VALUES(?)";
    const values = [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      hashedPassword,
    ];

    db.query(sql, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User registered successfully");
    });
  });
};

export const login = (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ? LIMIT 1";

  // Check if user exists
  db.query(sql, [req.body.email], (err, data) => {
    //
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User doesn't exist");

    // Compare passwords
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword) return res.status(400).json("Wrong email or password");

    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpLOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out");
};
