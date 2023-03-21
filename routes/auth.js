const express = require("express");
const router = express.Router();
const { encrypt, compare } = require("../utils/handlePassword");

//localhost:3001/api/auth/register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const passwordHash = await encrypt(password);
  const body = { username, email, password: passwordHash };
  res.json({ data: body });
});

module.exports = router;
