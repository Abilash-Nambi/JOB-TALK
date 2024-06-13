const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    //console.log("🚀 + checkAuth + token:", token);

    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    const tokenValid = jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET_KEY
    );

    //console.log("🚀 + checkAuth + tokenValid:", tokenValid);
    req.user = await userModel.findById(tokenValid._id);
    //console.log("🚀 + checkAuth + user:", req.user);
    next();
  } catch (error) {
    console.log("🚀 + checkAuth + error:", error);
    res.status(401).json({ message: "You are Unauthorized" });
  }
};

module.exports = { checkAuth };
