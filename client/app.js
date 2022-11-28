import pubsub from './src/pubsub/pubsub.js';
import Router from './src/router/router.js';

import { initBrokers } from './src/brokers/initBrokers.js';
import { initComponents } from './src/components/initComponents.js';
import { routes } from './src/router/routes.js';
import { registerServiceWorker } from './serviceWorker.js';

const rootAnchor = 'root';
const initPath = '/home';

const appRun = () => {
  registerServiceWorker();
  initBrokers();
  initComponents();
  pubsub.publish('setNavElement', null);
  pubsub.publish('setHomeElement', null);
  const router = new Router(rootAnchor, initPath);
  routes.forEach((route) => router.useRoute(route));
};

document.addEventListener('DOMContentLoaded', appRun);
