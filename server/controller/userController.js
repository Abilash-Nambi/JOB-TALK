const userModel = require("../models/userModel");
const { generatePasswordHash, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");

const userSignUp = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;
    if (!userName || !email || !password || !role) {
      return res.json({
        message: "Please fill full registration form!",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "This email address has already been registered!",
      });
    }

    // If user doesn't exist, hash the password
    const hashedPassword = await generatePasswordHash(password);

    // Create new user
    const newUser = await userModel.create({
      userName,
      email,
      password: hashedPassword,
      role,
    });

    // Exclude password field from response
    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    // Send success response without password
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    // Handle errors
    return res.status(400).json({
      message: error.message,
    });
  }
};
const userSignIn = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Please provide email, password, role.",
      });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    //console.log("🚀 + userSignIn + user:", user);

    // If user doesn't exist, return error
    if (!user) {
      return res
        .status(400)
        .json({ message: "User Not Found, Please check mail id" });
    }

    if (user.role !== role) {
      return res.status(400).json({ message: "User with this role not found" });
    }

    // Check if password is correct
    const isValidPassword = await comparePassword(password, user.password);

    // If password is incorrect, return error
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password or email" });
    }

    // Generate token for authentication
    const token = generateToken(user._id);

    const options = {
      expires: new Date(
        new Date().getTime() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 //expires after 5 days
      ),
      httpOnly: true,
    };

    // Return success response with cookies token, email, and user ID
    return res.status(200).cookie("token", token, options).json({
      message: "Login Success",
      token,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    // Handle errors
    return res.status(400).json({ message: error.message });
  }
};

const userSignOut = async (req, res) => {
  try {
    res
      .status(201)
      .cookie("token", " ", {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "User logged out successfully",
      });
  } catch (error) {}
};

module.exports = { userSignUp, userSignIn, userSignOut };
