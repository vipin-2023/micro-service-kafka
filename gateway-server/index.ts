// Import required modules
import express, { Request, Response } from 'express';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Create an instance of Express
const app = express();
const PORT = 3001;

// API Gateway routes configuration
const routes: { path: string; microservice: string }[] = [
  { path: '/inventory', microservice: process.env.INVENTORY_SERVICE_URL || "http://localhost:3000" },
  { path: '/order', microservice: process.env.ORDER_SERVICE_URL || "http://localhost:4000" },
  
];

// Request forwarding
app.use(express.json());

// Define route handlers for each path
routes.forEach((route) => {
  app.all(route.path, async (req: Request, res: Response) => {
    try {
      // Forward the request to the appropriate microservice
      const config: AxiosRequestConfig = {
        method: req.method,
        url: `${route.microservice}${req.url}`,
        headers: req.headers,
        data: req.body,
      };

      const response: AxiosResponse = await axios(config);

      // Return the response from the microservice back to the client
      res.status(response.status).json(response.data);
    } catch (error: any) {
      // Handle any errors that occur during the request forwarding
      const err: AxiosError = error;
      res.status(err.response?.status || 500).json(err.response?.data || { message: 'Internal Server Error' });
    }
  });
});

// Start the API Gateway server
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
