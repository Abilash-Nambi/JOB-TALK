const express = require("express");

const {
  userSignUp,
  userSignIn,
  userSignOut,
  getUser,
  forgetPassword,
  resetPassword,
} = require("../controller/userController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.post("/register", userSignUp);
router.post("/sign-in", userSignIn);
router.post("/sign-out", checkAuth, userSignOut);
router.get("/get-user", checkAuth, getUser);
router.post("/forgot-password", forgetPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
