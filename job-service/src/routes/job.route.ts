import express from "express";
import { requireAuth } from "../middlewares/auth";
import { upload } from "../middlewares/upload";
import {
  createJob,
  getJobById,
  getJobs,
  getJobsByUser,
} from "../controllers/job.controller";

const router = express.Router();

router.post("/", requireAuth, upload.array("attachments"), createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.get("/user/:userId", getJobsByUser);

export default router;
