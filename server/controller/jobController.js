const jobModel = require("../models/jobModel");

const getAllJobs = async (req, res) => {
  const pageLimit = 4;
  const page = parseInt(req.query.page) - 1 || 0;
  const skipCount = page * pageLimit;
  try {
    const jobList = await jobModel
      .find({ expired: false })
      .skip(skipCount)
      .limit(pageLimit);
    const count = await jobModel.find({ expired: false }).countDocuments();

    const totalPage = Math.ceil(count / pageLimit);

    res
      .status(200)
      .json({ message: "Success", data: jobList, totalPage: totalPage });
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
    } = req.body.data;

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
    // // console.log("🚀 + postJob + postedBy:", postedBy);

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
    const { search } = req.query;
    if (search) {
      const myJobs = await jobModel.aggregate([
        {
          $match: {
            postedBy: req.user._id,
            jobTitle: { $regex: search, $options: "i" },
          },
        },
      ]);
      res.status(200).json({ message: "Success", data: myJobs });
    } else {
      const myJobs = await jobModel.aggregate([
        { $match: { postedBy: req.user._id } },
      ]); //we can use jobModel.find({postedBy: req.user._id})...get same result
      res.status(200).json({ message: "Success", data: myJobs });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return res.status(400).json({
        message: "Job Seeker not allowed to access this resource.",
      });
    }
    const { id } = req.params;
    // // console.log("🚀 + updateJob + jobId:", id);
    if (!id) {
      return res.status(400).json({ message: "Job Id is required" });
    }

    const { updatedData } = req.body;
    // // console.log("🚀 + updateJob + updatedData:", updatedData);

    // Validate updatedData
    if (!updatedData || Object.keys(updatedData).length === 0) {
      return res.status(400).json({ message: "Updated data is required" });
    }

    // Check if the job exists
    const existingJob = await jobModel.findById(id);
    if (!existingJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Update the job
    const updatedJob = await jobModel.findByIdAndUpdate(id, updatedData, {
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
    const { role } = req.user;
    if (role === "Job Seeker") {
      return res.status(400).json({
        message: "Job Seeker not allowed to access this resource.",
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

const getSingleJob = async (req, res) => {
  const { id } = req.params;
  // // console.log("🚀 + getSingleJob + id:", id);
  try {
    const job = await jobModel.findById(id);
    if (!job) {
      return res.status(400).json({ message: "Job not found." });
    }
    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAllFiltredJobs = async (req, res) => {
  const pageLimit = 4;
  const page = parseInt(req.query.page) - 1 || 0;
  const skipCount = page * pageLimit;

  const salary = req.query.salary;
  const experience = req.query.experience;
  const employment = req.query.employment;

  // Build the query object based on the filters provided
  const query = { expired: false };

  if (salary) {
    query.minPrice = { $gte: salary };
  }

  if (experience) {
    query.experienceLevel = experience;
  }

  if (employment) {
    query.employmentType = employment;
  }
  console.log("🚀 + getAllFiltredJobs + query:", query);
  try {
    // Find jobs based on the query
    const jobList = await jobModel.find(query).skip(skipCount).limit(pageLimit);
    // console.log("🚀 + getAllFiltredJobs + jobList:", jobList);

    // Count total jobs based on the same query
    const count = await jobModel.find(query).countDocuments();

    const totalPage = Math.ceil(count / pageLimit);

    res.status(200).json({
      message: "Success",
      data: jobList,
      totalPage: totalPage,
      count: count,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const searchJobs = async (req, res) => {
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

module.exports = {
  getAllJobs,
  postJob,
  getMyjobs,
  updateJob,
  removeJob,
  getSingleJob,
  getAllFiltredJobs,
  searchJobs,
};
