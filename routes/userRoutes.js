const express = require("express");

const { signupUser, loginUser , getUser } = require("../src/controllers/userController")
const auth = require("../src/middleware/auth")
const router = express.Router();

router.post("/signup" , signupUser);
router.post("/login" , loginUser);
router.get("/" ,auth  , getUser )

module.exports = router