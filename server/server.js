const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const recruiterRoute = require("./routes/recruiter");
const userRoute = require("./routes/user");
const jobRoute = require("./routes/job");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDb();

const PORT = 7000;

app.use("/api/recruiter", recruiterRoute);
app.use("/api/user", userRoute);
app.use("/api/job", jobRoute);

app.all("*", (req, res) => {
  res.status(404).json("This page does not exist");
});

app.listen(PORT, () => {
  console.log(`Your port is running on ${PORT}`);
});
