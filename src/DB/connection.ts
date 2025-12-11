import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE || '',
  process.env.USERNAME || '',
  process.env.PASSWORD || '',
  {
    host: process.env.HOST,
    port: Number(process.env.PORT) || 3306,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(path.join(__dirname, '../../certificate/ca.pem')),
      },
    },
  }
);

export default sequelize;
