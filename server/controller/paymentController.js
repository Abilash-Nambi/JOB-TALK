const Razorpay = require("razorpay");
const crypto = require("crypto");

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
const validateOrder = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  try {
    const sha = crypto.createHmac("sha256", "kNSBbDBZsb2j7e7Foxc1LpgP");
    //order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if (digest !== razorpay_signature) {
      return res.status(400).json({ message: "Transaction is not legit!" });
    }

    res.json({
      msg: "success",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.log("🚀 + validateOrder + error:", error);
  }
};

module.exports = { createOrder, validateOrder };
