import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/order-service-db');

  console.log('Connected to MongoDB');
};
