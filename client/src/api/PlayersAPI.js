import { PLAYERS_BASE_PATH } from './APIconstants.js';

const getPlayers = async () => {
  const response = await fetch(PLAYERS_BASE_PATH);
  if (!response.ok) {
    // some error
  } else {
    const data = await response.json();
    return data;
  }
};

const getPlayer = async (playerId) => {
  const response = await fetch(`${PLAYERS_BASE_PATH}/${playerId}`);
  if (!response.ok) {
    // some error
  } else {
    const data = await response.json();
    return data;
  }
};

const getPlayerAsset = async (playerId) => {
  const response = await fetch(`${PLAYERS_BASE_PATH}/${playerId}/asset`);
  if (!response.ok) {
    // some error
  } else {
    const data = await response.json();
    return data;
  }
};

export { getPlayer, getPlayerAsset, getPlayers };
