const applicationModel = require("../models/applicationModel");
const cloudinary = require("../config/cloudinary");
const jobModel = require("../models/jobModel");
const userModel = require("../models/userModel");

const employerGetAllApplication = async (req, res) => {
  try {
    const { role, _id } = req.user;
    if (role === "Job Seeker") {
      return res.status(400).json({
        message: "Job Seeker not allowed to access this resource.",
      });
    }

    const applications = await applicationModel.aggregate([
      { $match: { "employerID.user": _id } },
    ]); //we can use applicationModel.find({postedBy: req.user._id})...get same result
    res.status(200).json({ message: "Success", data: applications });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const jobSeekerGetAllApplication = async (req, res) => {
  try {
    const { role, _id } = req.user;
    if (role === "Employer") {
      return res.status(400).json({
        message: "Employer not allowed to access this resource.",
      });
    }

    const applications = await applicationModel.aggregate([
      { $match: { "applicantID.user": _id } },
    ]); //we can use applicationModel.find({postedBy: req.user._id})...get same result
    res.status(200).json({ message: "Success", data: applications });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const jobSeekerDeleteApplication = async (req, res) => {
  try {
    const { role } = req.user;
    const { jobId } = req.body;
    //console.log("🚀 + jobSeekerDeleteApplication + jobId:", jobId);
    if (role === "Employer") {
      return res.status(400).json({
        message: "Employer not allowed to access this resource.",
      });
    }

    const { id } = req.params;
    //console.log("🚀 + jobSeekerDeleteApplication + id:", id);
    const application = await applicationModel.findById(id);
    if (!application) {
      return res.status(400).json({ message: "Application not found" });
    }
    const deletedApplicaion = await applicationModel.findByIdAndDelete(id);

    // Update user's appliedJobs array
    const updateUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        $pull: { appliedJobs: jobId },
      },
      { new: true }
    );
    console.log("🚀 + jobSeekerDeleteApplication + updateUser:", updateUser);
    return res.status(200).json({
      message: "Application deleted successfully",
      data: deletedApplicaion,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const postApplication = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "Employer") {
      return res.status(400).json({
        message: "Employer not allowed to access this resource.",
      });
    }

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "Resume File Required!" });
    }
    const { resume } = req.files;
    // console.log("🚀 + postApplication + resume:", resume.tempFilePath);
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(resume.mimetype)) {
      // this mime type will check that file included the allowed formas
      return res.status(400).json({
        message: "Invalid file type. Please upload a PNG, jpeg, webp file.",
      });
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(
      resume.tempFilePath
    );
    //console.log("Cloudinary Response:", cloudinaryResponse); //.secure_url:
    // Handle the response

    if (cloudinaryResponse.error || cloudinaryResponse === "undefined") {
      return res
        .status(500)
        .json({ message: "Failed to upload Resume to Cloudinary" });
    }
    const { name, email, coverLetter, phone, address, jobId } = req.body;
    const applicantID = {
      user: req.user._id,
      role: "Job Seeker",
    };

    if (!jobId) {
      return res.status(400).json({ message: "JobId not found!" });
    }

    const jodDetails = await jobModel.findById(jobId);
    const updateUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        $push: { appliedJobs: jobId },
      },
      { new: true }
    );
    console.log("🚀 + postApplication + updateUser:", updateUser);
    //console.log("🚀 + postApplication + jodDetails:", jodDetails);
    if (!jodDetails) {
      return res.status(400).json({ message: "Job not found!" });
    }
    const employerID = {
      user: jodDetails.postedBy,
      role: "Employer",
    };
    const companyName = jodDetails.companyName;

    // const jobTitle = jodDetails._id;
    // console.log("🚀 + postApplication + jobTile:", jobTitle);

    if (
      !name ||
      !email ||
      !coverLetter ||
      !phone ||
      !address ||
      !applicantID ||
      !employerID ||
      !resume
    ) {
      return res.status(400).json({ messsage: "Please fill all fields" });
    }

    const application = await applicationModel.create({
      name,
      email,
      coverLetter,
      phone,
      address,
      applicantID,
      employerID,
      resume: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
      jobTitle: jodDetails.jobTitle,
      companyName,
      jobId,
    });

    res
      .status(200)
      .json({ message: "Application created successfully", data: application });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  employerGetAllApplication,
  jobSeekerGetAllApplication,
  jobSeekerDeleteApplication,
  postApplication,
};
