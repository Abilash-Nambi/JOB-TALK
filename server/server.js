const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connectDb = require("./config/db");
connectDb();
const PORT = 7000;
const recruiterRoute = require("./routes/recruiter");
const userRoute = require("./routes/user");
const jobRoute = require("./routes/job");

app.use("/api/recruiter", recruiterRoute);
app.use("/api/user", userRoute);
app.use("/api/job", jobRoute);

app.all("*", (req, res) => {
  res.status(404).json("This page does not exist");
});

app.listen(PORT, () => {
  return console.log(`your port is running on ${PORT}`);
});
