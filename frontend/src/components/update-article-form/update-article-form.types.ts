export interface IFormValues {
  [key: string]: string | undefined;
  title: string;
  link: string;
  imageURL: string;
  contentSnippet: string;
  content: string;
  pubdate: string;
}

export interface IProp {
  id: string | undefined;
}
