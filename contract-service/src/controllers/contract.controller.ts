import { Request, Response } from "express";
import * as contractService from "../services/contract.service";

export const createContract = async (req: Request, res: Response) => {
  try {
    const contract = await contractService.createContract(req.body);
    res.status(201).json(contract);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllContracts = async (_req: Request, res: Response) => {
  try {
    const contracts = await contractService.getAllContracts();
    res.status(200).json(contracts);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getContractById = async (req: Request, res: Response) => {
  try {
    const contract = await contractService.getContractById(req.params.id);
    if (!contract) {
      res.status(404).json({ message: "Contract not found" });
      return;
    }
    res.status(200).json(contract);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateContractStatus = async (req: Request, res: Response) => {
  try {
    const contract = await contractService.updateContractStatus(
      req.params.id,
      req.body.status
    );
    if (!contract) {
      res.status(404).json({ message: "Contract not found" });
      return;
    }
    res.status(200).json(contract);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
