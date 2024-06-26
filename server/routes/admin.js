const express = require("express");
const {
  adminAllJob,
  adminSignup,
  adminLogin,
  adminActiveJob,
  adminInActiveJob,
  getAdmin,
  adminSignOut,
  adminSearchJobs,
  adminRemoveJob,
  adminJobCount,
} = require("../controller/adminController");

const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

router.post("/sign-up", adminSignup);
router.post("/sign-in", adminLogin);
router.get("/all-jobs", adminAuth, adminAllJob);
router.get("/active-jobs", adminAuth, adminActiveJob);
router.get("/in-active-jobs", adminAuth, adminInActiveJob);
router.get("/get-admin", adminAuth, getAdmin);
router.post("/sign-out", adminAuth, adminSignOut);
router.post("/search", adminAuth, adminSearchJobs);
router.delete("/remove-job/:id", adminAuth, adminRemoveJob);
router.get("/job-count", adminAuth, adminJobCount);
module.exports = router;
