class PubSub {
  constructor() {
    if (PubSub.instance) return PubSub.instance;
    PubSub.instance = this;
    this.events = {};
  }

  subscriber(event, subscriber) {
    console.log('subscriber:', event);
    this.events[event] = this.events[event] || [];
    this.events[event].push(subscriber);
  }

  unsubscribe(event, subscriber) {
    if (this.events[event]) {
      this.events[event] == this.events[event].filter((sub) => sub !== subscriber);
    }
  }

  publish(event, payload) {
    console.log('publish:', event, payload);
    if (this.events[event]) {
      this.events[event].forEach((subscriber) => {
        subscriber(payload);
      });
    }
  }
}

const pubsub = new PubSub();
export default pubsub;
