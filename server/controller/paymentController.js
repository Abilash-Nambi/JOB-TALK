const Razorpay = require("razorpay");

var instance = new Razorpay({
  //key_id: process.env.RAZOR_PAY_KEYID,
  key_id: "rzp_test_pYbplgWljckWIm",
  //key_secret: process.env.RAZOR_PAY_SECRET,
  key_secret: "kNSBbDBZsb2j7e7Foxc1LpgP",
});

const createOrder = async (req, res) => {
  console.log("🚀 + createOrder + req:", req);
  const { amount, currency, receipt } = req.body;

  try {
    const order = await instance.orders.create({
      amount,
      currency,
      receipt,
    });

    if (!order) {
      return res.status(500).json({ message: "no options provided " });
    }

    res.json(order);
  } catch (error) {
    console.log("🚀 + createOrder + error:", error);
  }
};

module.exports = { createOrder };
