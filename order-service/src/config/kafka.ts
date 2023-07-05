
import { Kafka, KafkaConfig } from 'kafkajs';

const kafkaConfig: KafkaConfig = {
  clientId: 'order-service',
  brokers: ['localhost:9092'], // Update with your Kafka broker(s)
};

export const kafka = new Kafka(kafkaConfig);
export const kafkaProducer = kafka.producer();
export const kafkaConsumer = kafka.consumer({ groupId: 'order-service-group' });

export default kafkaConfig
