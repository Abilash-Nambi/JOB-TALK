const express = require("express");
const {
  employerGetAllApplication,
  jobSeekerGetAllApplication,
  jobSeekerDeleteApplication,
} = require("../controller/applicaionController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.get("/employer", checkAuth, employerGetAllApplication);
router.get("/jobseeker", checkAuth, jobSeekerGetAllApplication);
router.delete("/jobseeker/remove/:id", checkAuth, jobSeekerDeleteApplication);

module.exports = router;
