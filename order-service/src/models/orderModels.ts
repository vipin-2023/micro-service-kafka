import mongoose, { Document, Schema } from 'mongoose';

export default interface Order extends Document {
  orderId: string;
  items: any[];
}

const orderSchema = new Schema({
  orderId: { type: String, required: true },
  items: { type: Array, required: true },
});

export const OrderModel = mongoose.model<Order>('Order', orderSchema);
