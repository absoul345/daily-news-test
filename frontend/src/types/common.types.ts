export interface IArticle {
  _id?: string;
  title: string;
  link: string;
  imageURL: string;
  contentSnippet: string;
  content: string;
  pubdate: string;
}

export interface ErrorResponse {
  data: {
    data: {
      message: string;
    };
  };
}
