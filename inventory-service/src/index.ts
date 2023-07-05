
// inventory-service/src/app.ts
import express from 'express';
import inventoryRoute from "../src/routers/inventoryRouters"

const app = express();

app.use(express.json());

app.use('/api', inventoryRoute);

export default app;
