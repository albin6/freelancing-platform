export interface IJob {
  _id: string;
  clientId: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  status: "Open" | "Closed";
  attachments: string[];
}
