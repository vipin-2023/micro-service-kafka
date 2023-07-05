import { Kafka, KafkaConfig } from 'kafkajs';

export const kafkaConfig: KafkaConfig = {
  clientId: 'inventory-service',
  brokers: ['localhost:9092'], // Update with your Kafka broker(s)
};

export const kafka = new Kafka(kafkaConfig);
export const kafkaConsumer = kafka.consumer({ groupId: 'order-service-group' });
