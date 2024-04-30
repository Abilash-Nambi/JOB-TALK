const express = require("express");
const {
  getAllJobs,
  addJob,
  removeJob,
  updateJob,
} = require("../controller/jobController");
const router = express.Router();

router.get("/", getAllJobs);
router.post("/addjob", addJob);
router.post("/deletejob/:id", removeJob);
router.post("/updatejob/:id", updateJob);

module.exports = router;
