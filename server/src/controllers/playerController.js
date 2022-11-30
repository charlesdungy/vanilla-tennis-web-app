import { getPlayers, getSinglePlayerAsset, getSinglePlayerById } from '../services/playerService';

const getAllPlayers = async (req, res, next) => {
  try {
    const [result] = await getPlayers();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getPlayerById = async (req, res, next) => {
  try {
    const playerId = req.params.playerId;
    const [result] = await getSinglePlayerById(playerId);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getPlayerAsset = async (req, res, next) => {
  try {
    const playerId = req.params.playerId;
    const [result] = await getSinglePlayerAsset(playerId);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export { getAllPlayers, getPlayerAsset, getPlayerById };
