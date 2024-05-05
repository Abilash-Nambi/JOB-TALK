const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({ message: "Access Denied" });
    }

    const tokenValid = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = tokenValid._id;
    next();
  } catch (error) {
    res.status(401).json({ message: "You are Unauthorized" });
  }
};

module.exports = { checkAuth };
