const express = require("express");
const router = express.Router();
const { createOrder } = require("../controller/paymentController");

router.post("/create", createOrder);

module.exports = router;
