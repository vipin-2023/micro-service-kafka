import { Request, Response } from 'express';


import { kafkaProducer } from '../config/kafka';
import { OrderModel } from '../models/orderModels';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { orderId, items } = req.body;

    // Publish order event to Kafka
    await kafkaProducer.send({
      topic: 'orders',
      messages: [{ value: JSON.stringify({ orderId, items }) }],
    });

    // Save order to MongoDB
    const order = await OrderModel.create({ orderId, items });

    res.status(201).json({ order });
  } catch (error) {
    console.error('Failed to create order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};
