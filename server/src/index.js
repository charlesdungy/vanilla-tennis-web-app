import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import config from '../config/config.json';

const app = express();
// Never deploying this project
const port = 3001;

app.use(helmet());
app.use(morgan('common'));
app.use(
  cors({
    origin: config.localhost,
    methods: 'GET',
  })
);

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
