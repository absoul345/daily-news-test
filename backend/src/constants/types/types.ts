import { ObjectId } from 'mongodb';

export interface IErrorResponse {
  status?: number;
  message?: string;
}

export interface INewsArticle {
  _id: ObjectId;
  title: string;
  link: string;
  pubdate: string;
  imageURL: string;
  content: string;
  contentSnippet: string;
}

export interface IDecodedToken {
  id: string;
}

export interface IAdmin {
  _id: ObjectId;
  email: string;
  password: string;
  token: string;
}
