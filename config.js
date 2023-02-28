import dotEnv from 'dotenv';

dotEnv.config(process.env['NODE_ENV'] === 'dev' ? './env.dev' : './env');

export default {
  PORT: process.env['PORT'],
  DB_URL: process.env['MONGODB_URI'],
  APP_SECRET: process.env['APP_SECRET'],
};
