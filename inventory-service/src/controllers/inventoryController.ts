// inventory-service/src/controllers/inventoryController.ts
import { Message } from 'kafkajs';

import { InventoryItemModel } from '../models/inventoryModel';
import { kafkaConsumer } from '../config/kafka';

const processOrderEvent = async (message: Message) => {
  try {
    const orderEvent = JSON.parse(message.value?.toString() || '');

    const { orderId, items } = orderEvent;

    // Perform the necessary inventory processing
    // Your implementation here

    // Save the inventory changes to MongoDB
    await InventoryItemModel.create({ orderId, items });

    console.log('Inventory updated for order:', orderId);
  } catch (error) {
    console.error('Failed to process order event:', error);
  }
};

export const consumeOrderEvents = async () => {
  await kafkaConsumer.connect();
  await kafkaConsumer.subscribe({ topic: 'orders', fromBeginning: true });

  await kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      await processOrderEvent(message);
    },
  });
};
