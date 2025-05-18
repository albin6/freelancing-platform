import { Request, Response } from "express";
import { UserProfile } from "../models/user-profile.model";

export const getPublicProfile = async (req: Request, res: Response) => {
  const profile = await UserProfile.findOne({ userId: req.params.userId });
  if (!profile) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }
  res.json(profile);
};

export const getMyProfile = async (req: Request, res: Response) => {
  const profile = await UserProfile.findOne({ userId: (req as any).user.id });
  if (!profile) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }
  res.json(profile);
};

export const updateProfile = async (req: Request, res: Response) => {
  const { name, bio, skills, location, avatarUrl } = req.body;
  const userId = (req as any).user.id;

  const profile = await UserProfile.findOneAndUpdate(
    { userId },
    { name, bio, skills, location, avatarUrl },
    { new: true, upsert: true }
  );

  res.json(profile);
};
