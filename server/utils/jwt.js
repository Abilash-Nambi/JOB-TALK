var jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const token = jwt.sign(
    {
      _id: userId,
    },
    process.env.JWT_SECRET_KEY
  );

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000), //expires in 7 days
    httpOnly: true,
  };
};

module.exports = { generateToken };
