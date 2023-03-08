import express from 'express';
import cors from 'cors';
import { ErrorHandler } from './utils/error-handler.js';

export default async (app) => {
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));
  app.use(cors());
  app.use(express.static(process.cwd() + '/public'));

  // APIS

  app.use(ErrorHandler);
};
