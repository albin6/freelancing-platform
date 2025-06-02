import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = process.env.MONGO_CONNECTION_STRING;

  if (!mongoURI) {
    throw new Error("DB connnection string not loaded!");
  }
  try {
    await mongoose.connect(mongoURI);
    console.log("user-service connected to DB");
  } catch (error) {
    console.error(error);
  }
};
