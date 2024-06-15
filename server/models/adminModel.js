const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    reqired: true,
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
