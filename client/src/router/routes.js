import pubsub from '../pubsub/pubsub.js';

export const routes = [
  {
    anchorTagId: 'root',
    idRegEx: /^players-link-[0-9]+$/,
    idString: 'players-link-*',
    hrefRegEx: /^\/players\/[0-9]+$/,
    pubEvent: 'getPlayerDataReady',
    pubDataAttr: 'data-id',
    publish: (event, data) => {
      pubsub.publish(event, data);
    },
  },
  {
    anchorTagId: 'home-link',
    idRegEx: /^home-link$/,
    idString: 'home-link',
    hrefRegEx: /^\/home$/,
    pubEvent: 'setHomeElement',
    pubDataAttr: undefined,
    publish: (event, data) => {
      pubsub.publish(event, data);
    },
  },
  {
    anchorTagId: 'players-link',
    idRegEx: /^players-link$/,
    idString: 'players-link',
    hrefRegEx: /^\/players$/,
    pubEvent: 'getPlayerListDataReady',
    pubDataAttr: undefined,
    publish: (event, data) => {
      pubsub.publish(event, data);
    },
  },
];
