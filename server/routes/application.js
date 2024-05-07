const express = require("express");
const {
  employerGetAllApplication,
  jobSeekerGetAllApplication,
  jobSeekerDeleteApplication,
  postApplication,
} = require("../controller/applicaionController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.get("/employer/getall", checkAuth, employerGetAllApplication);
router.get("/jobseeker/getall", checkAuth, jobSeekerGetAllApplication);
router.delete("/jobseeker/remove/:id", checkAuth, jobSeekerDeleteApplication);
router.post("/post-application", checkAuth, postApplication);

module.exports = router;
