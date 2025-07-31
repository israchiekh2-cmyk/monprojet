const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Email incorrect" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Mot de passe incorrect" });

  const token = jwt.sign({ id: user._id }, "SECRET123", { expiresIn: "2h" });

  res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
});

module.exports = router;

 