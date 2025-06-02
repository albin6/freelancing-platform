import { model, Schema } from "mongoose";
import { INotification } from "../types/notification.type";

export interface INotificationModel
  extends Omit<INotification, "_id" | "userId">,
    Document {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
}

const notificationSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, required: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Notification = model("notification", notificationSchema);
