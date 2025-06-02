import mongoose, { Document, Schema } from "mongoose";
import { ContractStatus, IContract } from "../types/contract.type";

export interface IContractModel
  extends Omit<
      IContract,
      "_id" | "jobId" | "clientId" | "freelancerId" | "proposalId"
    >,
    Document {
  _id: Schema.Types.ObjectId;
  jobId: Schema.Types.ObjectId;
  clientId: Schema.Types.ObjectId;
  freelancerId: Schema.Types.ObjectId;
  proposalId: Schema.Types.ObjectId;
}

const contractSchema = new Schema<IContractModel>(
  {
    jobId: { type: Schema.Types.ObjectId, required: true },
    proposalId: { type: Schema.Types.ObjectId, required: true },
    clientId: { type: Schema.Types.ObjectId, required: true },
    freelancerId: { type: Schema.Types.ObjectId, required: true },
    status: {
      type: String,
      enum: Object.values(ContractStatus),
      default: ContractStatus.ACTIVE,
    },
  },
  { timestamps: true }
);

export const Contract = mongoose.model<IContractModel>(
  "contract",
  contractSchema
);
