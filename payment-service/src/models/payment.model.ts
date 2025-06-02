import { Document, model, Schema } from "mongoose";
import { IPayment } from "../types/payment.type";

export interface IPaymentModel
  extends Omit<IPayment, "_id" | "contractId" | "clientId" | "freelancerId">,
    Document {
  _id: Schema.Types.ObjectId;
  contractId: Schema.Types.ObjectId;
  clientId: Schema.Types.ObjectId;
  freelancerId: Schema.Types.ObjectId;
}

const paymentSchema = new Schema(
  {
    contractId: { type: Schema.Types.ObjectId, required: true },
    clientId: { type: Schema.Types.ObjectId, required: true },
    freelancerId: { type: Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: "USD" },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    transactionDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Payment = model("payment", paymentSchema);
