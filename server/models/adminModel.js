const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin"],
  },
});

module.exports = mongoose.model("Admin", adminSchema);
