import { Document } from "mongoose";

export enum ContractStatus {
  ACTIVE = "Active",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
}

export interface IContract {
  jobId: string;
  proposalId: string;
  clientId: string;
  freelancerId: string;
  status: ContractStatus;
  createdAt: Date;
  updatedAt: Date;
}
