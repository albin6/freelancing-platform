import { Request, Response } from "express";
import { Notification } from "../models/notification.model";

export const getUserNotifications = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const notifications = await Notification.find({ userId }).sort({
    createdAt: -1,
  });
  res.json(notifications);
};

export const createNotification = async (req: Request, res: Response) => {
  const { userId, type, message } = req.body;
  const notification = await Notification.create({ userId, type, message });
  res.status(201).json(notification);
};

export const markAsRead = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await Notification.findByIdAndUpdate(
    id,
    { read: true },
    { new: true }
  );
  res.json(updated);
};
