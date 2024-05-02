const jobModel = require("../models/jobModel");
const recruiterModel = require("../models/recruiterModel");

const { generatePasswordHash, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");

const recruiterSignUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body.data;

    // Check if user already exists
    const existingUser = await recruiterModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "This email address has already been registered!",
      });
    }

    // If user doesn't exist, hash the password
    const hashedPassword = await generatePasswordHash(password);

    // Create new user
    const newUser = await recruiterModel.create({
      userName,
      email,
      password: hashedPassword,
    });

    // Exclude password field from response
    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    // Send success response without password
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    // Handle errors
    return res.status(400).json({
      message: error.message,
    });
  }
};
const recruiterSignIn = async (req, res) => {
  try {
    const { email, password } = req.body.data;

    // Check if user exists
    const user = await recruiterModel.findOne({ email });
    console.log("🚀 + recruiterSignIn + user:", user);

    // If user doesn't exist, return error
    if (!user) {
      return res
        .status(400)
        .json({ message: "User Not Found, Please check mail id" });
    }

    // Check if password is correct
    const isValidPassword = await comparePassword(password, user.password);

    // If password is incorrect, return error
    if (!isValidPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Generate token for authentication
    const token = generateToken(user._id);

    // Return success response with token, email, and user ID
    return res.status(200).json({
      message: "Login Success",
      token,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    // Handle errors
    return res.status(400).json({ message: error.message });
  }
};

const getAllRecruitersJobs = async (req, res) => {
  try {
    const recruiterEmail = req.body.email;

    if (!recruiterEmail) {
      return res.status(400).json({ message: "Email is required" });
    }

    const jobList = await jobModel.aggregate([
      { $match: { ownerEmail: recruiterEmail } },
    ]);

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
    res.status(200).json({ message: "Job added successfully", data: newJob });
  } catch (error) {
    // Handle errors
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const removeJob = async (req, res) => {
  try {
    const jobId = req.query.id;
    console.log("🚀 + removeJob + jobId:", jobId);

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
    const jobId = req.query.id;

    if (!jobId) {
      return res.status(400).json({ message: "Job ID is required" });
    }

    const updatedData = req.body.data;

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
    // Handle errors
    res
      .status(400)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllRecruitersJobs,
  addJob,
  removeJob,
  updateJob,
  recruiterSignUp,
  recruiterSignIn,
};
