const jobModel = require("../models/jobModel");

const getAllJobs = async (req, res) => {
  try {
    const jobList = await jobModel.find({});
    res.status(200).json({ message: "Success", data: jobList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addJob = async (req, res) => {
  try {
    const { data } = req.body;

    // Check if data exists in the request body
    if (!data) {
      return res.status(400).json({ message: "No job data found" });
    }

    // Create a new job
    const newJob = await jobModel.create(data);

    // Respond with success message and created job data
    res.status(201).json({ message: "Job added successfully", data: newJob });
  } catch (error) {
    // Handle errors
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const removeJob = async (req, res) => {
  try {
    const jobId = req.params.id;

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
    // Handle errors
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const updatedData = req.body.data;

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
    // Handle errors
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = { getAllJobs, addJob, removeJob, updateJob };
