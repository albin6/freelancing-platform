import express from "express";
import {
  submitProposal,
  getProposalsForJob,
  updateProposalStatus,
} from "../controllers/proposal.controller";

const router = express.Router();

router.post("/", submitProposal);
router.get("/job/:jobId", getProposalsForJob);
router.patch("/:proposalId/status", updateProposalStatus);

export default router;
