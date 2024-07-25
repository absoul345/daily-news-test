import { Request, Response } from 'express';

import { Articles } from '../../models/news-articles';

import { sendResponse } from '../../helpers/send-response';
import { STATUS, STATUS_MESSAGE } from '../../constants/error-constants';

export const getById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const article = await Articles.findById(id);

  if (!article) {
    return sendResponse({
      res,
      status: STATUS.NOT_FOUND,
      statusMessage: STATUS_MESSAGE.NOT_FOUND,
      data: {
        message: `Article with id=${id} not found`,
      },
    });
  }

  sendResponse({
    res,
    status: STATUS.OK,
    statusMessage: STATUS_MESSAGE.SUCCESS,
    data: {
      article,
    },
  });
};
