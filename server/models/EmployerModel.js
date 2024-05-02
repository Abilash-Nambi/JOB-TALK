const mongoose = require("mongoose");

const employerSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      lowercase: true,
      required: [true, "username is required"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "email is required"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
    },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Employer", employerSchema);
