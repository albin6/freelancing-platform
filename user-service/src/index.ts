import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

import profileRoutes from "./routes/profile.route";
import { connectDB } from "./config/connect-db";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cookieParser());
app.use("/api/profiles", profileRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`auth service listening on port ${PORT}`);
});
