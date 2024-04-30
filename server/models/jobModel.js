const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    OwnerEmail: {
      type: String,
      required: [true, "email is required"],
      index: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: [true, "company name is required"],
      index: true,
    },
    jobTitle: {
      type: String,
      required: [true, "job title is required"],
      index: true,
    },
    companyLogo: {
      type: String,
      trim: true,
    },
    minPrice: {
      type: Number,
    },
    maxPrice: {
      type: Number,
    },
    salaryType: {
      type: String,
      trim: true,
    },
    jobLocation: {
      type: String,
      trim: true,
    },
    postingDate: {
      type: String,
    },
    experienceLevel: {
      type: String,
    },
    employmentType: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
