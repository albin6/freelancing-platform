export interface INotification {
  _id?: string;
  userId: string;
  type: string;
  message: string;
  read?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
