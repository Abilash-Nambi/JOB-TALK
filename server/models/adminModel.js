const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recruiters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recruiter",
    },
  ],
});

module.exports = mongoose.model("Admin", adminSchema);
