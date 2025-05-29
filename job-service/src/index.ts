import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

import jobRoutes from "./routes/job.route";
import { connectDB } from "./config/connect-db";
import path from "path";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`auth service listening on port ${PORT}`);
});
