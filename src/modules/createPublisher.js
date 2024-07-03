export default function createPublisher(broker) {
  return {
    publish: broker.publish,
  };
}
