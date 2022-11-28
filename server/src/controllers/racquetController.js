import { getRacquets } from '../services/racquetService';

const getAllRacquets = async (req, res, next) => {
  try {
    const [result] = await getRacquets();
    res.status(200).json(result);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export { getAllRacquets };
