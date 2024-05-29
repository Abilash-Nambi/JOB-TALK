const Razorpay = require("razorpay");

var instance = new Razorpay({
  //key_id: process.env.RAZOR_PAY_KEYID,
  key_id: "rzp_test_pYbplgWljckWIm",
  //key_secret: process.env.RAZOR_PAY_SECRET,
  key_secret: "kNSBbDBZsb2j7e7Foxc1LpgP",
});

console.log(process.env.RAZOR_PAY_KEYID, "4645");

const createOrder = async (req, res) => {
  const { options } = req.body;
  console.log("🚀 + createOrder + options:", options);
  try {
    const order = await instance.orders.create(options);

    if (!order) {
      return res.status(500).json({ message: "no options provided " });
    }

    res.json(order);
  } catch (error) {
    console.log("🚀 + createOrder + error:", error);
  }
};

module.exports = { createOrder };
// {
//     amount: 50000,
//     currency: "INR",
//     receipt: "receipt#1",
//     notes: {
//       key1: "value3",
//       key2: "value2",
//     },
//   }
