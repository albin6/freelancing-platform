import { Document, model, Schema } from "mongoose";
import { IJob } from "../types/job.type";

export interface IJobModel extends Omit<IJob, "_id" | "clientId">, Document {
  _id: Schema.Types.ObjectId;
  clientId: Schema.Types.ObjectId;
}

const jobSchema = new Schema<IJobModel>(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: { type: String, required: true },
    description: String,
    category: String,
    budget: Number,
    status: { type: String, enum: ["Open", "Closed"], default: "Open" },
    attachments: [String],
  },
  { timestamps: true }
);

export const Job = model<IJobModel>("job", jobSchema);
