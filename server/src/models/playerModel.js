import promisePool from '../db';

const get = async () => {
  try {
    const orderBy = 'CurrentRank';
    // eslint-disable-next-line quotes
    const [rows] = await promisePool.execute(`call GetPlayers(?)`, [orderBy]);
    return rows;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getPlayerById = async (playerId) => {
  try {
    // eslint-disable-next-line quotes
    const [rows] = await promisePool.execute(`call GetPlayer(?)`, [playerId]);
    const response = rows[0];
    return response;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export { get, getPlayerById };
