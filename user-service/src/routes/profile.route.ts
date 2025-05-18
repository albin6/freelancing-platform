// user-service/src/routes/profileRoutes.ts
import express from "express";
import {
  getPublicProfile,
  updateProfile,
  getMyProfile,
} from "../controllers/profile.controller";
import { requireAuth } from "../middleware/auth";

const router = express.Router();

router.get("/:userId", getPublicProfile); // public profile
router.get("/", requireAuth, getMyProfile); // own profile
router.put("/", requireAuth, updateProfile); // update own profile

export default router;
