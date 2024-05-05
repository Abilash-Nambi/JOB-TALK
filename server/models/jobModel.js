const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please provide a Company name."],
      minLength: [3, "Title must contain at least 3 Characters!"],
      maxLength: [30, "Title cannot exceed 30 Characters!"],
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
    jobPostedOn: {
      type: Date,
      default: Date.now,
    },
    experienceLevel: {
      type: String,
    },
    employmentType: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please provide decription."],
      minLength: [30, "Description must contain at least 30 Characters!"],
      maxLength: [500, "Description cannot exceed 500 Characters!"],
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    expired: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
