const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel");

// const adminAuth = async (req, res, next) => {
//   try {
//     const authorizationHeader = req.headers["authorization"];

//     if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
//       return res
//         .status(401)
//         .json({ message: "Access Denied: No token provided" });
//     }

//     const token = authorizationHeader.split(" ")[1];
//     console.log("🚀 + adminAuth + token:", token);

//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Access Denied: Malformed token" });
//     }

//     const tokenValid = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     console.log("🚀 + adminAuth + tokenValid:", tokenValid);

//     const user = await adminModel.findById(tokenValid._id);
//     console.log("🚀 + adminAuth + user:", user);
//     if (!user) {
//       return res.status(401).json({ message: "Access Denied: User not found" });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.log("🚀 + adminAuth + error:", error.message);
//     res.status(401).json({ message: "You are Unauthorized" });
//   }
// };

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    //console.log("🚀 + checkAuth + token:", token);
    //console.log("🚀 + checkAuth + token:", token);

    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    const tokenValid = jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET_KEY
    );

    req.user = await adminModel.findById(tokenValid._id);
    //console.log("🚀 + checkAuth + user:", req.user);
    next();
  } catch (error) {
    console.log("🚀 + checkAuth + error:", error);
    res.status(401).json({ message: "You are Unauthorized" });
  }
};

module.exports = { adminAuth };
