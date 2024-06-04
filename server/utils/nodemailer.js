const nodemailer = require("nodemailer");

const resetPasswordNodeMailer = async (email, code) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // port: 587,
    // secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USERNAME, // sender address
      to: email, // list of receivers
      subject: " Job Talk Password reset",
      //text: "Hello world?", // plain text body
      html: `
      <h1> Password Reset Code</h1>
      <p>You have requested to reset your password. Please use the following verification code to reset your password:</p>
      <h2 style="text-align: center; background-color: #f1f1f1; padding: 10px; border-radius: 5px;">${code}</h2>
      <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
    `,
    });

    return info;

    //console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  const result = await main().catch(console.error);
  // console.log("🚀 + resetPasswordNodeMailer + result:", result);
  return result;
};

module.exports = { resetPasswordNodeMailer };
