const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const recruiterRouter = require("./routes/recruiter");
const userRouter = require("./routes/user");
const jobRouter = require("./routes/job");
const applicationRouter = require("./routes/application");
const fileUpload = require("express-fileupload");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
connectDb();

const PORT = 7000;

app.use("/api/recruiter", recruiterRouter);
app.use("/api/user", userRouter);
app.use("/api/job", jobRouter);
app.use("/api/application", applicationRouter);

app.all("*", (req, res) => {
  res.status(404).json("This page does not exist");
});

app.listen(PORT, () => {
  console.log(`Your port is running on ${PORT}`);
});
