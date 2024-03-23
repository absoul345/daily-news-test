import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from 'morgan';
import nodeSchedule from 'node-schedule';

import articlesRoute from './routes/articles';
import authRoute from './routes/auth';

import { sendResponse } from './helpers/send-response';
import { addArticlesDB } from './utils/rss-parser';
import { IErrorResponse } from './types/types';

import { COLLECTION_NAME } from './constants/db-constants';
import { STATUS, STATUS_MESSAGE } from './constants/error-constants';

//Set up environment
dotenv.config({ path: '../.env' });
const { DB_HOST, PORT = 3002 } = process.env;

mongoose
  .connect(DB_HOST!, { dbName: COLLECTION_NAME })
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

//Add new articles in db with schedules. start at 07:00 am everyday
const rule = new nodeSchedule.RecurrenceRule();
rule.hour = 7;
rule.minute = 0;
rule.tz = 'Europe/Kyiv';

nodeSchedule.scheduleJob(rule, function () {
  addArticlesDB();
});

//Routes
app.use('/api/articles', articlesRoute);
app.use('/api/auth', authRoute);

//Error Handlers
app.use((_, res: Response) => {
  return sendResponse({
    res,
    status: STATUS.NOT_FOUND,
    statusMessage: STATUS_MESSAGE.NOT_FOUND,
  });
});

app.use(
  (err: IErrorResponse, req: Request, res: Response, _: NextFunction): void => {
    const { status = 500, message = 'Server error' } = err;

    sendResponse({
      res,
      status: status,
      statusMessage: STATUS_MESSAGE.ERROR,
      data: {
        message,
      },
    });
  }
);

export default app;
