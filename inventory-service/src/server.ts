
import app from '.';
import { connectToMongoDB } from './config/mongodb';

import { consumeOrderEvents } from './controllers/inventoryController';

const PORT = 4000;

const startServer = async () => {
  await connectToMongoDB();

  // Start consuming order events from Kafka
  await consumeOrderEvents();

  app.listen(PORT, () => {
    console.log(`Inventory Service is running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start the Inventory Service:', error);
  process.exit(1);
});