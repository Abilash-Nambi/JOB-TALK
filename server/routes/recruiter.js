const express = require("express");
const {
  addJob,
  removeJob,
  updateJob,
  recruiterSignIn,
  recruiterSignUp,
  getAllRecruitersJobs,
} = require("../controller/recruiterController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.post("/signIn", recruiterSignIn);
router.post("/signUp", recruiterSignUp);
router.get("/alljobs", checkAuth, getAllRecruitersJobs);
router.post("/addjob", checkAuth, addJob);
router.delete("/deletejob", checkAuth, removeJob);
router.put("/updatejob", checkAuth, updateJob);

module.exports = router;
