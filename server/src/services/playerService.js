import { get, getPlayerAsset, getPlayerById } from '../models/playerModel';

const getPlayers = async () => {
  try {
    const result = await get();
    return result;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getSinglePlayerById = async (playerId) => {
  try {
    const result = await getPlayerById(playerId);
    return result;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getSinglePlayerAsset = async (playerId) => {
  try {
    const result = await getPlayerAsset(playerId);
    return result;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export { getPlayers, getSinglePlayerAsset, getSinglePlayerById };
