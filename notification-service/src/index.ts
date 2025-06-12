import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

import notificationRoutes from "./routes/notification.route";
import { connectDB } from "./config/connect-db";
import { connectRabbitMQ } from "./utils/rabbitmq";
import { consumeProposalCreated } from "./events/proposal-created.consumer";

const app = express();
const PORT = process.env.PORT || 4006;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/notifications", notificationRoutes);

connectRabbitMQ()
  .then((channel) => {
    consumeProposalCreated(channel);
    app.listen(PORT, () => {
      connectDB();
      console.log(`notification service listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Could not start service:", err);
    process.exit(1);
  });
