import PlayerListBroker from './playerListBroker.js';
import PlayerProfileBroker from './playerProfileBroker.js';
import HomeBroker from './homeBroker.js';
import NavBroker from './navBroker.js';

const initBrokers = () => {
  new HomeBroker();
  new NavBroker();
  new PlayerListBroker();
  new PlayerProfileBroker();
};

export { initBrokers };
