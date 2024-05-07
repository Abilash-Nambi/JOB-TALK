const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });
cloudinary.config({
  cloud_name: "dzdzx6lek",
  api_key: "155952966561584",
  api_secret: "e6pcj8YTVi07c8KrqzZx4It3mTg",
});

module.exports = cloudinary;
