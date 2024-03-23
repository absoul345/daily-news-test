import { Request } from 'express';
import { IAdmin } from './types';

export interface IRequest extends Request {
  user?: IAdmin;
}
