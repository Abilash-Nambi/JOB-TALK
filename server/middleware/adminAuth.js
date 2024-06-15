const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel");

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    console.log("🚀 + checkAuth + token:", token);

    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    const tokenValid = jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET_KEY
    );

    //console.log("🚀 + checkAuth + tokenValid:", tokenValid);
    req.user = await adminModel.findById(tokenValid._id);
    console.log("🚀 + checkAuth + user:", req.user);
    next();
  } catch (error) {
    console.log("🚀 + checkAuth + error:", error);
    res.status(401).json({ message: "You are Unauthorized" });
  }
};

module.exports = { adminAuth };
