import { Request, Response } from 'express';

import { Articles } from '../../models/news-articles';

import { sendResponse } from '../../helpers/send-response';
import { STATUS, STATUS_MESSAGE } from '../../constants/error-constants';

export const removeById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  const result = await Articles.findByIdAndDelete(id);

  if (!result) {
    res.status(404).json({ status: 'error', code: 404, message: 'Not found' });
  }

  sendResponse({
    res,
    status: STATUS.OK,
    statusMessage: STATUS_MESSAGE.SUCCESS,
    data: {
      result,
    },
  });
};
