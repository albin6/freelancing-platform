import { Document, model, Schema } from "mongoose";
import { IUserProfile } from "../types/user-profile.type";

export interface IUserProfileModel
  extends Omit<IUserProfile, "userId">,
    Document {
  userId: Schema.Types.ObjectId;
}

const userProfileSchema = new Schema<IUserProfileModel>(
  {
    userId: { type: String, required: true, unique: true },
    name: String,
    bio: String,
    skills: [String],
    location: String,
    avatarUrl: String,
  },
  { timestamps: true }
);

export const UserProfile = model<IUserProfileModel>(
  "user-profile",
  userProfileSchema
);
