import { Request, Response } from 'express';

import { Admin } from '../../models/admin';

import { sendResponse } from '../../helpers/send-response';
import { STATUS, STATUS_MESSAGE } from '../../constants/error-constants';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const admin: any = await Admin.findOne({ email });

  if (!admin || !admin.comparePassword(password)) {
    sendResponse({
      res,
      data: { message: 'Email or password is wrong' },
      status: STATUS.UNAUTHORIZED,
      statusMessage: STATUS_MESSAGE.UNAUTHORIZED,
    });
    return;
  }

  const token = admin.createToken();

  await Admin.findByIdAndUpdate(admin._id, { token });

  sendResponse({
    res,
    data: { credentials: { email: admin.email, token } },
    status: STATUS.OK,
    statusMessage: STATUS_MESSAGE.SUCCESS,
  });
};
