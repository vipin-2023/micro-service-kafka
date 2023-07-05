// order-service/src/routes/orderRoutes.ts
import express from 'express';
import { createOrder } from '../controllers/orderController';

const router = express.Router();

router.post('/orders', createOrder);

export default router;
