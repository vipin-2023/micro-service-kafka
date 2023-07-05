// inventory-service/src/config/mongodbConfig.ts
import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/inventory-service-db');

  console.log('Connected to MongoDB');
};
