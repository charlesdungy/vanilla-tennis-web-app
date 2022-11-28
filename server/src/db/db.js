import { createPool } from 'mysql2';
import config from '../../config/config.json';

const pool = createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  connectionLimit: config.connectionLimit,
  queueLimit: config.queueLimit,
});

const promisePool = pool.promise();
export default promisePool;
