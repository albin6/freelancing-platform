import { Request, Response } from "express";
import { Payment } from "../models/payment.model";

export const createPayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create payment" });
  }
};

export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch payments" });
  }
};
