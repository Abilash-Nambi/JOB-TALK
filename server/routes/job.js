const express = require("express");
const {
  getAllJobs,
  postJob,
  getMyjobs,
} = require("../controller/jobController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.get("/", getAllJobs);
router.get("/my-jobs", checkAuth, getMyjobs);
router.post("/post", checkAuth, postJob);

module.exports = router;
