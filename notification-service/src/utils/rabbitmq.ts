import amqp from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://rabbitmq:5672";

export const connectRabbitMQ = async (retries = 5, delay = 3000) => {
  while (retries > 0) {
    try {
      const connection = await amqp.connect(RABBITMQ_URL);
      const channel = await connection.createChannel();
      console.log("Connected to RabbitMQ");
      return channel;
    } catch (err) {
      console.error(
        `RabbitMQ connection failed. Retrying in ${delay}ms... (${retries} retries left)`
      );
      retries--;
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw new Error("Failed to connect to RabbitMQ after multiple attempts");
};
