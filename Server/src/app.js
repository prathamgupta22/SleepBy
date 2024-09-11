import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//dotenv config
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  })
);
//imports api
import userRoutes from "./routes/user.routes.js";
import sleepRoutes from "./routes/sleeptrack.routes.js";

//api
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/sleep", sleepRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to node server</h1>");
});

export default app;
