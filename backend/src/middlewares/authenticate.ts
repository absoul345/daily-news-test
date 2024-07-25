import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';

import { Admin } from '../models/admin';

import { IDecodedToken } from '../types/types';
import { IRequest } from '../types/express';

const { SECRET_KEY } = process.env;

export const authenticate = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res
        .status(401)
        .json({ status: 'error', code: 401, message: 'Not authorized' });
    }

    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
      return res
        .status(401)
        .json({ status: 'error', code: 401, message: 'Not authorized' });
    }

    const { id } = jwt.verify(token, SECRET_KEY!) as IDecodedToken;
    const admin = await Admin.findById(id);

    if (!admin || !admin.token) {
      return res
        .status(401)
        .json({ status: 'error', code: 401, message: 'Not authorized' });
    }

    req.user = admin;

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ status: 'error', code: 401, message: 'Not authorized' });
  }
};
