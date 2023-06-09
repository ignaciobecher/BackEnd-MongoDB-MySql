const express = require("express");
const router = express.Router();
const { registerController, loginController } = require("../controllers/auth");
//localhost:3001/api/auth/register
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
