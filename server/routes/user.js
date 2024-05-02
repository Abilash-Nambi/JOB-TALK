const express = require("express");
const { userSignUp, userSignIn } = require("../controller/userController");
const router = express.Router();

router.post("/register", userSignUp);
router.post("/sign-in", userSignIn);

module.exports = router;
