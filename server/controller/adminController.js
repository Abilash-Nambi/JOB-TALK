const adminModel = require("../models/adminModel");
const jobModel = require("../models/jobModel");
const { generatePasswordHash, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");

const adminSignup = async (req, res) => {
  try {
    const { email, password, role, userName } = req.body;
    if (!email || !password || !role || !userName) {
      return res.status(400).json({
        message: "Please provide all required details",
      });
    }
    const existingUser = await adminModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "This email address has already been registered!",
      });
    }
    const hashedPassword = await generatePasswordHash(password);
    const creatAdmin = await adminModel.create({
      email,
      password: hashedPassword,
      role,
      userName,
    });

    // Exclude password field from response
    const adminWithoutPassword = creatAdmin.toObject();
    delete adminWithoutPassword.password;

    // Send success response without password
    return res
      .status(200)
      .json({ message: "Registered Successfully", data: adminWithoutPassword });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
const adminLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Please provide email, password, role.",
      });
    }

    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res
        .status(400)
        .json({ message: "Admin Not Found, Please check mail id" });
    }
    if (admin.role !== role) {
      return res.status(400).json({ message: "You have No access" });
    }
    // Check if password is correct
    const isValidPassword = await comparePassword(password, admin.password);

    // If password is incorrect, return error
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password or email" });
    }

    // Generate token for authentication
    const token = generateToken(admin._id);

    const options = {
      expires: new Date(
        new Date().getTime() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 //expires after 5 days
      ),
      httpOnly: true,
    };

    // Return success response with cookies token, email, and user ID
    return res.status(200).cookie("token", token, options).json({
      message: "Login Success",
      token,
      email: admin.email,
      id: admin._id,
      userName: admin.userName,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const adminInActiveJob = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "Job Seeker" || role === "Employer") {
      return res.status(400).json({
        message: "Job Seeker or employer not allowed to access this resource.",
      });
    }

    const { search } = req.query;
    const matchCondition = search
      ? { expired: true, jobTitle: new RegExp(search, "i") } // Use RegExp for partial matching and case insensitivity
      : { expired: true };

    const result = await jobModel.aggregate([
      {
        $facet: {
          data: [{ $match: matchCondition }],
          totalCount: [
            { $match: { expired: true } }, // Apply the same match condition without jobTitle filter
            { $count: "count" },
          ],
        },
      },
    ]);

    const data = result[0].data;
    const totalCount = result[0].totalCount[0]
      ? result[0].totalCount[0].count
      : 0;

    res.status(200).json({ message: "Success", data, totalCount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const adminActiveJob = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "Job Seeker" || role === "Employer") {
      return res.status(400).json({
        message: "Job Seeker or employer not allowed to access this resource.",
      });
    }

    const { search } = req.query;
    const matchCondition = search
      ? { expired: false, jobTitle: new RegExp(search, "i") } // Use RegExp for partial matching and case insensitivity
      : { expired: false };

    const result = await jobModel.aggregate([
      {
        $facet: {
          data: [{ $match: matchCondition }],
          totalCount: [
            { $match: { expired: false } }, // Apply the same match condition without jobTitle filter
            { $count: "count" },
          ],
        },
      },
    ]);

    const data = result[0].data;
    const totalCount = result[0].totalCount[0]
      ? result[0].totalCount[0].count
      : 0;

    res.status(200).json({ message: "Success", data, totalCount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const adminAllJob = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "Job Seeker" || role === "Employer") {
      return res.status(400).json({
        message: "Job Seeker or employer not allowed to access this resource.",
      });
    }
    const { search } = req.query;
    if (search) {
      const myJobs = await jobModel.aggregate([
        {
          $match: {
            jobTitle: { $regex: search, $options: "i" },
          },
        },
      ]);
      res.status(200).json({ message: "Success", data: myJobs });
    } else {
      const result = await jobModel.aggregate([
        {
          $facet: {
            data: [{ $match: {} }], // Match all documents
            totalCount: [{ $count: "count" }], // Count all documents
          },
        },
      ]);
      const data = result[0].data;
      const totalCount = result[0].totalCount[0].count;
      res.status(200).json({ message: "Success", data, totalCount });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAdmin = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const adminSignOut = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", " ", {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "User logged out successfully",
      });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const adminSearchJobs = async (req, res) => {
  const { search } = req.query;
  console.log("🚀 + searchJobs + search:", search);
  if (!search) {
    return res.status(400).json({ message: "Enter the Job Title" });
  }
  try {
    const job = await jobModel.find(
      {
        jobTitle: { $regex: search, $options: "i" },
      },
      { jobTitle: 1 }
    );
    if (job.length === 0) {
      return res.status(404).json({ message: "Job not found." });
    }
    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const adminRemoveJob = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "Job Seeker" || role === "Employer") {
      return res.status(400).json({
        message: "No premission to access this resource.",
      });
    }

    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Job Id is required" });
    }

    // Check if the job exists
    const existingJob = await jobModel.findById(id);
    if (!existingJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Delete the job
    const deletedJob = await jobModel.findByIdAndDelete(id);

    // Respond with success message and deleted data
    res
      .status(200)
      .json({ message: "Job deleted successfully", data: deletedJob });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const adminJobCount = async (req, res) => {
  try {
    const allJobs = await jobModel.find({}).countDocuments();
    const allActiveJobs = await jobModel
      .find({ expired: false })
      .countDocuments();
    const allInActiveJobs = await jobModel
      .find({ expired: true })
      .countDocuments();
    res.status(200).json({
      message: "Success",
      alljobs: allJobs,
      allActiveJobs: allActiveJobs,
      allInActiveJobs: allInActiveJobs,
    });
  } catch {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  adminAllJob,
  adminSignup,
  adminLogin,
  adminActiveJob,
  adminInActiveJob,
  getAdmin,
  adminSignOut,
  adminSearchJobs,
  adminRemoveJob,
  adminJobCount,
};
