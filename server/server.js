const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connectDb = require("./config/db");
connectDb();
const PORT = 7000;
const jobRoute = require("./routes/job");
const userRoute = require("./routes/user");

app.use("/api/job", jobRoute);
app.use("/api/user", userRoute);

app.all("*", (req, res) => {
  res.status(404).json("This page does not exist");
});

app.listen(PORT, () => {
  return console.log(`your port is running on ${PORT}`);
});
