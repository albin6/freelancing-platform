import { Request, Response } from "express";
import { Proposal } from "../models/proposal.model";
import { ProposalStatus } from "../types/proposal.type";

export const submitProposal = async (req: Request, res: Response) => {
  try {
    const { jobId, freelancerId, coverLetter, proposedPrice } = req.body;
    const proposal = await Proposal.create({
      jobId,
      freelancerId,
      coverLetter,
      proposedPrice,
    });
    res.status(201).json(proposal);
  } catch (error) {
    res.status(500).json({ message: "Failed to submit proposal", error });
  }
};

export const getProposalsForJob = async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;
    const proposals = await Proposal.find({ jobId }).populate(
      "freelancerId",
      "name"
    );
    res.status(200).json(proposals);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch proposals", error });
  }
};

export const updateProposalStatus = async (req: Request, res: Response) => {
  try {
    const { proposalId } = req.params;
    const { status } = req.body;

    if (!Object.values(ProposalStatus).includes(status)) {
      res.status(400).json({ message: "Invalid status" });
      return;
    }

    const proposal = await Proposal.findByIdAndUpdate(
      proposalId,
      { status },
      { new: true }
    );

    res.status(200).json(proposal);
  } catch (error) {
    res.status(500).json({ message: "Failed to update proposal", error });
  }
};
