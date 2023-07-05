// inventory-service/src/routes/inventoryRoutes.ts
import express from 'express';
import { consumeOrderEvents } from '../controllers/inventoryController';

const router = express.Router();

router.get('/inventory', (req, res) => {
  // Get inventory details
  // Your implementation here
  res.json({ message: 'Inventory details' });
});

export default router;
