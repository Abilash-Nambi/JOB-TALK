const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/checkAuth");
const {
  createOrder,
  validateOrder,
} = require("../controller/paymentController");

router.post("/create", checkAuth, createOrder);
router.post("/validate", checkAuth, validateOrder);

module.exports = router;
