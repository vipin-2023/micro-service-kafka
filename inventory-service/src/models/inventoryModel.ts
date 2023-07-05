// inventory-service/src/models/inventoryModel.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface InventoryItem extends Document {
  orderId: string;
  items: any[];
}

const inventorySchema = new Schema({
  orderId: { type: String, required: true },
  items: { type: Array, required: true },
});

export const InventoryItemModel = mongoose.model<InventoryItem>('InventoryItem', inventorySchema);
