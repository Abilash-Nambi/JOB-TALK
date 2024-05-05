var jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const token = jwt.sign(
    {
      _id: userId,
    },
    process.env.JWT_SECRET_KEY
  );

  const options = {
    expires : new Date (
      Date.now()+ 
    )
  }
};

module.exports = { generateToken };
