const jobModel = require("../models/jobModel");

const getAllJobs = async (req, res) => {
  try {
    const jobList = await jobModel.find({ expired: false });
    res.status(200).json({ message: "Success", data: jobList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const postJob = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return res.status(400).json({
        message: "Job Seeker not allowed to access this resource.",
      });
    }

    const {
      companyName,
      jobTitle,
      companyLogo,
      minPrice,
      maxPrice,
      salaryType,
      jobLocation,
      experienceLevel,
      employmentType,
      description,
    } = req.body;

    if (
      !companyName ||
      !jobTitle ||
      !companyLogo ||
      !jobLocation ||
      !experienceLevel ||
      !employmentType ||
      !description
    ) {
      return res
        .status(400)
        .json({ message: "Please provide full job details." });
    }

    if (!minPrice || !maxPrice || !salaryType) {
      return res
        .status(400)
        .json({ message: "Please provide Salary details." });
    }

    const postedBy = req.user._id;

    const newJob = jobModel.create({
      companyName,
      jobTitle,
      companyLogo,
      minPrice,
      maxPrice,
      salaryType,
      jobLocation,
      experienceLevel,
      employmentType,
      description,
      postedBy,
    });
    res.status(200).json({ message: "Job added successfully", data: newJob });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllJobs, postJob };
