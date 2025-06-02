import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

import contractRoutes from "./routes/contract.route";
import { connectDB } from "./config/connect-db";

const app = express();
const PORT = process.env.PORT || 4004;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/contracts", contractRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`auth service listening on port ${PORT}`);
});
