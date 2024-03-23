import { Response } from 'express';

import { Admin } from '../../models/admin';

import { sendResponse } from '../../helpers/send-response';

import { IRequest } from '../../types/express';
import { STATUS, STATUS_MESSAGE } from '../../constants/error-constants';

export const logout = async (req: IRequest, res: Response): Promise<void> => {
  if (!req.user) {
    return sendResponse({
      res,
      status: STATUS.UNAUTHORIZED,
      statusMessage: STATUS_MESSAGE.UNAUTHORIZED,
      data: { message: 'User is not authenticated' },
    });
  }

  const { _id } = req.user;

  await Admin.findByIdAndUpdate(_id, { token: null });

  sendResponse({
    res,
    status: STATUS.NO_CONTENT,
    statusMessage: STATUS_MESSAGE.NO_CONTENT,
    data: { message: 'Logout success' },
  });
};
