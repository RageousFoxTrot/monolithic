import dotEnv from 'dotenv';

dotEnv.config({
  path: process.env['NODE_ENV'] === 'dev' ? './.env.dev' : './.env',
});

export default {
  PORT: process.env['PORT'],
  DB_URI: process.env['DB_URI'],
  APP_SECRET: process.env['APP_SECRET'],
};
