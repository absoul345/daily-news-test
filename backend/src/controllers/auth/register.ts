import { Response } from 'express';

import { Admin } from '../../models/admin';

import { sendResponse } from '../../helpers/send-response';

import { IRequest } from '../../constants/types/express';
import { STATUS, STATUS_MESSAGE } from '../../constants/error-constants';

export const register = async (req: IRequest, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const result = await Admin.findOne({ email });

  if (result) {
    sendResponse({
      res,
      status: STATUS.CONFLICT,
      statusMessage: STATUS_MESSAGE.CONFLICT,
      data: { message: 'Already register' },
    });
    return;
  }

  const newAdmin: any = new Admin({ email });
  newAdmin.setPassword(password);
  const token = newAdmin.createToken();
  newAdmin.token = token;

  await newAdmin.save();

  sendResponse({
    res,
    status: STATUS.CREATED,
    statusMessage: STATUS_MESSAGE.SUCCESS,
    data: {
      credential: { email: newAdmin.email, token },
    },
  });
};
