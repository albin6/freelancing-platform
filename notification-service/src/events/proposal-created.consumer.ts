import { Notification } from "../models/notification.model";
import { Channel } from "amqplib";

export const consumeProposalCreated = async (channel: Channel) => {
  const queue = "proposal_created";
  await channel.assertQueue(queue, { durable: true });

  channel.consume(queue, async (msg) => {
    if (msg) {
      const data = JSON.parse(msg.content.toString());

      await Notification.create({
        userId: data.clientId,
        type: "Proposal",
        message: `New proposal submitted for your job: ${data.jobTitle}`,
      });

      channel.ack(msg);
    }
  });
};
