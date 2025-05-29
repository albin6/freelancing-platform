import { Document, model, Schema } from "mongoose";
import { IProposal, ProposalStatus } from "../types/proposal.type";

export interface IPropasalModel
  extends Omit<IProposal, "jobId" | "freelancerId">,
    Document {
  jobId: Schema.Types.ObjectId;
  freelancerId: Schema.Types.ObjectId;
}

const proposalSchema = new Schema<IPropasalModel>(
  {
    jobId: { type: Schema.Types.ObjectId, required: true, ref: "Job" },
    freelancerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    coverLetter: { type: String, required: true },
    proposedPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: Object.values(ProposalStatus),
      default: ProposalStatus.Pending,
    },
  },
  { timestamps: true }
);

export const Proposal = model<IPropasalModel>("proposal", proposalSchema);
