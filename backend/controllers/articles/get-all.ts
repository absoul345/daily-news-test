import { Request, Response } from 'express';
import { sendResponse } from '../../helpers/send-response';
import { Articles } from '../../models/news-articles';
import { STATUS, STATUS_MESSAGE } from '../../constants/error-constants';

export const getAll = async (req: Request, res: Response): Promise<void> => {
  const articles = await Articles.find();

  sendResponse({
    res,
    status: STATUS.OK,
    statusMessage: STATUS_MESSAGE.SUCCESS,
    data: {
      articles,
    },
  });
};
