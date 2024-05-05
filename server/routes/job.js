const express = require("express");
const { getAllJobs, postJob } = require("../controller/jobController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.get("/", getAllJobs);
router.post("/post", checkAuth, postJob);

module.exports = router;
