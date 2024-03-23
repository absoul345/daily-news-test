import { Response } from 'express';

interface ISendResponseParams {
  res: Response;
  data?: any;
  status?: number;
  statusMessage: string;
}

export const sendResponse = ({
  res,
  data,
  status = 200,
  statusMessage,
}: ISendResponseParams): void => {
  res.status(status).json({
    status: statusMessage,
    code: status,
    data,
  });
};
