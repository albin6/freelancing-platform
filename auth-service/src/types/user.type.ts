export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: "client" | "freelancer";
}
