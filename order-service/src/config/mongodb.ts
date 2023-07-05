import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL_ORDER_SERVICE || 'mongodb://localhost:27017/order-service-db');

  console.log('Connected to MongoDB');
};
