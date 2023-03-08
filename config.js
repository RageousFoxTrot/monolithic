import dotEnv from 'dotenv';
import fs from 'fs';

dotEnv.config(process.env['NODE_ENV'] === 'dev' ? './env.dev' : './env');

export default {
  PORT: process.env['PORT'],
  DB_URI: process.env['DB_URI'],
  APP_SECRET: process.env['APP_SECRET'],
};

console.table({
  PORT: process.env['PORT'],
  DB_URI: process.env['DB_URI'],
  APP_SECRET: process.env['APP_SECRET'],
  ENV: process.env['NODE_ENV'] === 'dev' ? './env.dev' : './env',
  ALLOWED_CONTRIES: process.env['ALLOWED_COUNTRIES'],
});
