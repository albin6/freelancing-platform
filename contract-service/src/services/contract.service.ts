import { Contract } from "../models/contract.model";
import { ContractStatus } from "../types/contract.type";

export const createContract = async (data: {
  jobId: string;
  proposalId: string;
  clientId: string;
  freelancerId: string;
}) => {
  return await Contract.create(data);
};

export const getAllContracts = async () => {
  return await Contract.find();
};

export const getContractById = async (id: string) => {
  return await Contract.findById(id);
};

export const updateContractStatus = async (
  id: string,
  status: ContractStatus
) => {
  return await Contract.findByIdAndUpdate(id, { status }, { new: true });
};
