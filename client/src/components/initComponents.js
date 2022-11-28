import { definePlayerCard } from './playerCard/playerCard.js';
import { definePlayerCardList } from './playerCardList/playerCardList.js';
import { definePlayerProfile } from './playerProfile/playerProfile.js';

const initComponents = () => {
  definePlayerCard();
  definePlayerCardList();
  definePlayerProfile();
};

export { initComponents };
