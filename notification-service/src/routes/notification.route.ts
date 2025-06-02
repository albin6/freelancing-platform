import express from "express";
import {
  getUserNotifications,
  markAsRead,
  createNotification,
} from "../controllers/notification.controller";

const router = express.Router();

router.get("/:userId", getUserNotifications);
router.post("/", createNotification);
router.patch("/:id/read", markAsRead);

export default router;
