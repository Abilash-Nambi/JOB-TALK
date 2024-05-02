const userModel = require("../models/userModel");
const { generatePasswordHash, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");

const userSignUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body.data;

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
    const { email, password } = req.body.data;

    // Check if user exists
    const user = await userModel.findOne({ email });

    // If user doesn't exist, return error
    if (!user) {
      return res
        .status(400)
        .json({ message: "User Not Found, Please check mail id" });
    }

    // Check if password is correct
    const isValidPassword = await comparePassword(password, user.password);

    // If password is incorrect, return error
    if (!isValidPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Generate token for authentication
    const token = generateToken(user._id);

    // Return success response with token, email, and user ID
    return res.status(200).json({
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

module.exports = { userSignUp, userSignIn };
