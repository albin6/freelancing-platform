export interface IPayment {
  _id?: string;
  contractId: string;
  clientId: string;
  freelancerId: string;
  amount: number;
  currency?: string;
  status?: "pending" | "completed" | "failed";
  transactionDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
