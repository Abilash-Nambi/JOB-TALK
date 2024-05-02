const express = require("express");
const { getAllJobs } = require("../controller/jobController");
const router = express.Router();

router.get("/", getAllJobs);

module.exports = router;
