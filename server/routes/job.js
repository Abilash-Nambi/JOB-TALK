const express = require("express");
const {
  getAllJobs,
  postJob,
  getMyjobs,
  updateJob,
  removeJob,
  getSingleJob,
} = require("../controller/jobController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.get("/", getAllJobs);
router.get("/my-jobs", checkAuth, getMyjobs);
router.post("/post-job", checkAuth, postJob);
router.put("/update-job/:id", checkAuth, updateJob);
router.delete("/remove-job/:id", checkAuth, removeJob);
router.get("/single-job/:id", checkAuth, getSingleJob);

module.exports = router;
