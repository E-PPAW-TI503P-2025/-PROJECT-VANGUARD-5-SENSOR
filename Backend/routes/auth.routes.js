const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const [rows] = await db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );

  if (rows.length === 0) {
    return res.status(401).json({ message: "Login gagal" });
  }

  const user = rows[0];

  const token = jwt.sign(
    { id: user.id, username: user.username },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;
