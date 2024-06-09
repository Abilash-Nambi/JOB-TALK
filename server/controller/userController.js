const userModel = require("../models/userModel");
const { generatePasswordHash, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");
const { resetPasswordNodeMailer } = require("../utils/nodemailer");
const { generateVerificationCode } = require("../utils/verificationCode");

let PasscodeVerificationData = {};

const userSignUp = async (req, res) => {
  console.log("🚀 + userSignUp + req:", req);
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
    return res
      .status(200)
      .json({ message: "Registered Successfully", data: userWithoutPassword });
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
      userName: user.userName,
    });
  } catch (error) {
    // Handle errors
    return res.status(400).json({ message: error.message });
  }
};

const userSignOut = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", " ", {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "User logged out successfully",
      });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    //console.log("🚀 + forgetPassword + email:", email);
    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      res
        .status(400)
        .json({ message: `No user found with email: ${email} 👎🏻` });
      return;
    }
    const code = generateVerificationCode();
    PasscodeVerificationData.userId = exist._id;
    PasscodeVerificationData.code = code;
    console.log("🚀 + PasscodeVerificationData:", PasscodeVerificationData);
    const result = await resetPasswordNodeMailer(email, code);
    console.log("🚀 + forgetPassword + result:", result);

    // Check if email was sent successfully
    if (result && result.accepted.length > 0) {
      res
        .status(200)
        .json({ message: "Password reset email sent successfully" });
    } else {
      res.status(500).json({ message: "Failed to send password reset email" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { data } = req.body;
    // console.log("🚀 + resetPassword + data:", data);
    // console.log(
    //   "🚀 + resetPassword + PasscodeVerificationData:",
    //   PasscodeVerificationData
    // );
    const parsedCode = parseInt(data.resetCode);
    if (!parsedCode) {
      return res.status(400).json({ message: "Enter Otp code" });
    }
    if (parsedCode === PasscodeVerificationData.code) {
      const hashPass = await generatePasswordHash(data.newPassword);
      const update = await userModel.findByIdAndUpdate(
        PasscodeVerificationData.userId,
        {
          password: hashPass,
        },
        { new: true }
      );
      PasscodeVerificationData = {}; // Clear verification data
      res.status(200).json({ message: "Password reset successfully." });
    } else {
      res.status(401).json({ message: "You entered the wrong reset code." });
    }
  } catch (error) {
    console.error("Error resetting password:", error);
    res
      .status(500)
      .json({ message: "An error occurred while resetting the password." });
  }
};

module.exports = {
  getUser,
  userSignUp,
  userSignIn,
  userSignOut,
  forgetPassword,
  resetPassword,
};
