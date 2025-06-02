import express from "express";
import {
  createContract,
  getAllContracts,
  getContractById,
  updateContractStatus,
} from "../controllers/contract.controller";

const router = express.Router();

router.post("/", createContract);
router.get("/", getAllContracts);
router.get("/:id", getContractById);
router.patch("/:id/status", updateContractStatus);

export default router;
