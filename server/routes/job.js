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
router.delete("/deletejob/:id", removeJob);
router.put("/updatejob/:id", updateJob);

module.exports = router;
