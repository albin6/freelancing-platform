import { Request, Response } from "express";
import { Job } from "../models/job.model";

export const createJob = async (req: Request, res: Response) => {
  const { title, description, category, budget } = req.body;
  const clientId = (req as any).user.id;

  const attachments =
    (req.files as Express.Multer.File[])?.map((f) => f.filename) || [];

  const job = new Job({
    title,
    description,
    category,
    budget,
    clientId,
    attachments,
  });
  await job.save();

  res.status(201).json(job);
};

export const getJobs = async (req: Request, res: Response) => {
  const {
    category,
    status,
    minBudget,
    maxBudget,
    page = 1,
    limit = 10,
  } = req.query;

  const filter: any = {};
  if (category) filter.category = category;
  if (status) filter.status = status;
  if (minBudget || maxBudget) {
    filter.budget = {};
    if (minBudget) filter.budget.$gte = +minBudget;
    if (maxBudget) filter.budget.$lte = +maxBudget;
  }

  const jobs = await Job.find(filter)
    .skip((+page - 1) * +limit)
    .limit(+limit)
    .sort({ createdAt: -1 });

  res.json(jobs);
};

export const getJobById = async (req: Request, res: Response) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404).json({ message: "Job not found" });
    return;
  }
  res.json(job);
};

export const getJobsByUser = async (req: Request, res: Response) => {
  const jobs = await Job.find({ clientId: req.params.userId });
  res.json(jobs);
};
