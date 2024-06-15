const express = require("express");
const {
  adminAllJob,
  adminSignup,
  adminLogin,
  adminActiveJob,
  adminInActiveJob,
} = require("../controller/adminController");

const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

router.post("/sign-up", adminSignup);
router.post("/sign-in", adminLogin);
router.get("/all-jobs", adminAuth, adminAllJob);
router.get("/active-jobs", adminAuth, adminActiveJob);
router.get("/in-active-jobs", adminAuth, adminInActiveJob);
module.exports = router;
