const express = require("express");
const router = express.Router();
const {
  createOrder,
  validateOrder,
} = require("../controller/paymentController");

router.post("/create", createOrder);
router.post("/validate", validateOrder);

module.exports = router;
