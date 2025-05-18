import { Document, model, Schema } from "mongoose";
import { IUser } from "../types/user.type";

export interface IUserModel extends Omit<IUser, "_id">, Document {
  _id: Schema.Types.ObjectId;
}

const userSchema = new Schema<IUserModel>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["client", "freelancer"],
    required: true,
  },
});

export const User = model<IUserModel>("user", userSchema);
