export default function createBroker() {
  const subscriptions = {};
  return {
    subscribe: function (event, callback) {
      if (subscriptions[event]) {
        subscriptions[event] = [...subscriptions[event], callback];
      } else {
        subscriptions[event] = [callback];
      }
    },

    unsubscribe: function (event, callback) {
      subscriptions[event] = subscriptions[event].filter(
        (val) => val !== callback,
      );
    },

    publish: function (event, payload) {
      if (!subscriptions[event]) return;

      subscriptions[event].forEach((callback) => callback(payload));
    },
  };
}
