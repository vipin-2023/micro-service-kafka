
import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL_INVENTORY_SERVICE ||`mongodb://localhost:27017/${process.env.MONGODB_NAME || "inventory-service-db"}`);

  console.log('Connected to MongoDB');
};
