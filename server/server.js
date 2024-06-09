const express = require("express");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRouter = require("./routes/user");
const jobRouter = require("./routes/job");
const applicationRouter = require("./routes/application");
const paymentRouter = require("./routes/payment");
const fileUpload = require("express-fileupload");

dotenv.config();

const app = express();

app.use(
  cors({
    //origin: process.env.FRONTEND_URL,
    origin: "https://job-talk-xi.vercel.app",
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
const server = http.createServer(app);
app.use("/api/user", userRouter);
app.use("/api/job", jobRouter);
app.use("/api/application", applicationRouter);
app.use("/api/payment", paymentRouter);

app.all("*", (req, res) => {
  res.status(404).json("This page does not exist");
});

server.listen(PORT, () => {
  console.log(`Your port is running on ${PORT}`);
});
