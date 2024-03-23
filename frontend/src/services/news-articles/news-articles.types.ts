import { IArticle } from '../../types/common.types';

export type TUpdatedArticle = {
  _id: string;
  updatedData: IArticleUpdate;
};

export type TResponseArticles = {
  status: string;
  code: number;
  data: { articles: IArticle[] };
};

interface IArticleUpdate {
  title?: string;
  link?: string;
  imageUrl?: string;
  contentSnippet?: string;
  content?: string;
  pubdate?: string;
}
