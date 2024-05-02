const jobModel = require("../models/jobModel");

const getAllJobs = async (req, res) => {
  try {
    const jobList = await jobModel.find({});
    res.status(200).json({ message: "Success", data: jobList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllJobs };
