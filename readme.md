# Order and Inventory Microservices

This repository contains two microservices: Order Service and Inventory Service. These services are built using Node.js, Kafka, and MongoDB.

## Features

- Order Service:
  - Create orders and publish order events to Kafka.
  - Store orders in MongoDB.

- Inventory Service:
  - Consume order events from Kafka.
  - Process order events and update the inventory.
  - Store inventory items in MongoDB.

## Prerequisites

Before running the microservices, make sure you have the following software installed:

- Node.js (v14 or higher)
- Kafka broker (e.g., Apache Kafka)
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
