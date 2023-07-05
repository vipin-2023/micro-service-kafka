// order-service/src/server.ts

import app from '.';
import { connectToMongoDB } from './config/mongodb';


const PORT = 3000;

const startServer = async () => {
  await connectToMongoDB();

  app.listen(PORT, () => {
    console.log(`Order Service is running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start the Order Service:', error);
  process.exit(1);
});