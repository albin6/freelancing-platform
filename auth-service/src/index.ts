import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

import { connectDB } from "./config/connect-db";
import authRoutes from "./routes/auth.route";

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);

app.get("/api/auth/health", (req: Request, res: Response) => {
  res.json({
    success: true,
    status: "Auth Service Healthy",
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`auth service listening on port ${PORT}`);
});
