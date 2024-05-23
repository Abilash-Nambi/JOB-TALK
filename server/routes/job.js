const express = require("express");
const {
  getAllJobs,
  postJob,
  getMyjobs,
  updateJob,
  removeJob,
  getSingleJob,
  getAllFiltredJobs,
} = require("../controller/jobController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.get("/", getAllFiltredJobs);
router.get("/my-jobs", checkAuth, getMyjobs);
router.post("/post-job", checkAuth, postJob);
router.put("/update-job/:id", checkAuth, updateJob);
router.delete("/remove-job/:id", checkAuth, removeJob);
router.get("/single-job/:id", checkAuth, getSingleJob);
//router.get("/filter", checkAuth, getAllFiltredJobs);

module.exports = router;
