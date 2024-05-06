const express = require("express");
const {
  getAllJobs,
  postJob,
  getMyjobs,
  updateJob,
  removeJob,
} = require("../controller/jobController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.get("/", getAllJobs);
router.get("/my-jobs", checkAuth, getMyjobs);
router.post("/post-job", checkAuth, postJob);
router.put("/update-job", checkAuth, updateJob);
router.delete("/remove-job", checkAuth, removeJob);

module.exports = router;
