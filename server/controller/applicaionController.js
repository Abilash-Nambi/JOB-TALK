const applicationModel = require("../models/applicationModel");

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
    if (role === "Employer") {
      return res.status(400).json({
        message: "Employer not allowed to access this resource.",
      });
    }

    const { id } = req.params;
    const application = await applicationModel.findById(id);
    if (!application) {
      return res.status(400).json({ message: "Application not found" });
    }
    const deletedApplicaion = await applicationModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Application deleted successfully",
      data: deletedApplicaion,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  employerGetAllApplication,
  jobSeekerGetAllApplication,
  jobSeekerDeleteApplication,
};
