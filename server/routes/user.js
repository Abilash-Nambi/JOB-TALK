const express = require("express");

const {
  userSignUp,
  userSignIn,
  userSignOut,
} = require("../controller/userController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.post("/register", userSignUp);
router.post("/sign-in", userSignIn);
router.post("/sign-out", checkAuth, userSignOut);

module.exports = router;
