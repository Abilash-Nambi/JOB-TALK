const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log("🚀 + connectDb + connection:", connection.host);
  } catch (error) {
    console.log("🚀 + connectDb + error:", error);
  }
};

module.exports = connectDb;
