import express from 'express';
import { OpenMongoDBConnection } from './models/db-gateway.js';
import expressApp from './express-app.js';
import CONFIG from './congfig.js';

const StartServer = async () => {
  const app = express();
  await OpenMongoDBConnection();
  await expressApp();

  app
    .listen(CONFIG.PORT, () => {
      console.log(`Listening on port ${CONFIG.PORT}`);
    })
    .on('error', (e) => {
      console.error(e);
      process.exit();
    });
};

StartServer();
