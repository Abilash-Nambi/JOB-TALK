const jobModel = require("../models/jobModel");
const { findByIdAndUpdate } = require("../models/userModel");

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
    console.log("🚀 + postJob + postedBy:", postedBy);

    const newJob = await jobModel.create({
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

const getMyjobs = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return res.status(400).json({
        message: "Job Seeker not allowed to access this resource.",
      });
    }
    const myJobs = await jobModel.aggregate([
      { $match: { postedBy: req.user._id } },
    ]); //we can use jobModel.find({postedBy: req.user._id})...get same result
    res.status(200).json({ message: "Success", data: myJobs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const { jobId } = req.query;
    if (!jobId) {
      return res.status(400).json({ message: "Job Id is required" });
    }

    const updatedData = req.body;

    // Validate updatedData
    if (!updatedData || Object.keys(updatedData).length === 0) {
      return res.status(400).json({ message: "Updated data is required" });
    }

    // Check if the job exists
    const existingJob = await jobModel.findById(jobId);
    if (!existingJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Update the job
    const updatedJob = await jobModel.findByIdAndUpdate(jobId, updatedData, {
      new: true,
    });

    // Respond with success message and updated data
    res
      .status(200)
      .json({ message: "Job updated successfully", data: updatedJob });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const removeJob = async (req, res) => {
  try {
    const { jobId } = req.query;
    if (!jobId) {
      return res.status(400).json({ message: "Job Id is required" });
    }

    // Check if the job exists
    const existingJob = await jobModel.findById(jobId);
    if (!existingJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Delete the job
    const deletedJob = await jobModel.findByIdAndDelete(jobId);

    // Respond with success message and deleted data
    res
      .status(200)
      .json({ message: "Job deleted successfully", data: deletedJob });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = { getAllJobs, postJob, getMyjobs, updateJob, removeJob };
