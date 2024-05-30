const mongoose = require("mongoose");
const validator = require("validator");
const { subscribe } = require("../routes/user");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      lowercase: true,
      required: [true, "Username is required"],
      minLength: [3, "Username must contain at least 3 characters!"],
      maxLength: [30, "Username cannot exceed 30 characters!"],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "Email is required"],
      validate: [validator.isEmail, "Please provide a valid email!"],
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
      minLength: [8, "Password must contain at least 8 characters!"],
      //maxLength: [30, "Password cannot exceed 30 characters!"],
    },
    role: {
      type: String,
      required: [true, "Please provide role"],
      enum: ["Job Seeker", "Employer"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    subscribed: {
      type: Boolean,
      default: false,
    },
    // jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  }
  // { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
