export enum ProposalStatus {
  Pending = "pending",
  Accepted = "accepted",
  Rejected = "rejected",
}

export interface IProposal {
  jobId: string;
  freelancerId: string;
  coverLetter: string;
  proposedPrice: number;
  status: ProposalStatus;
}
