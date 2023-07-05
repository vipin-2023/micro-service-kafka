import express from 'express';
import { getInventory } from '../controllers/inventoryController';

const router = express.Router();

router.get('/inventory',getInventory);

export default router;
