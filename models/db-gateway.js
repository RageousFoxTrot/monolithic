import { connect as DBConnect } from 'mongoose';
import CONFIG from '../config.js';

export async function OpenMongoDBConnection() {
  try {
    await DBConnect(CONFIG.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connection to database has been established');
  } catch (e) {
    console.error(
      `========================== Error ======================\n${e}`
    );
    process.exit();
  }
}
