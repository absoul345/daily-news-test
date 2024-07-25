import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';

import { Articles } from '../../models/news-articles';

import { sendResponse } from '../../helpers/send-response';

import { INewsArticle } from '../../constants/types/types';
import { STATUS, STATUS_MESSAGE } from '../../constants/error-constants';

export const add = async (req: Request, res: Response): Promise<void> => {
  const generatedId = new ObjectId();

  const newArticle: INewsArticle = { ...req.body, _id: generatedId };
  const article = await Articles.create(newArticle);

  sendResponse({
    res,
    data: { article },
    status: STATUS.CREATED,
    statusMessage: STATUS_MESSAGE.SUCCESS,
  });
};
