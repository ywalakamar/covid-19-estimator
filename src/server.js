import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import logger from './logger';

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);
app.use('/api/v1/on-covid-19', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
