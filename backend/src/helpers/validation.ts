import { NextFunction, Request, RequestHandler, Response } from 'express';
import Joi from 'joi';

import { sendResponse } from './send-response';
import { STATUS, STATUS_MESSAGE } from '../constants/error-constants';

export const validation = (scheme: Joi.ObjectSchema<any>): RequestHandler => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = scheme.validate(req.body);

    if (error) {
      sendResponse({
        res,
        status: STATUS.BAD_REQUEST,
        statusMessage: STATUS_MESSAGE.BAD_REQUEST,
        data: {
          message: error.message,
        },
      });
    }
    next();
  };
  return func;
};
