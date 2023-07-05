import express from 'express';

import OrderRouter from "../src/routers/orderRoutes"

const app = express();

app.use(express.json());

app.use('/api', OrderRouter);

export default app;
