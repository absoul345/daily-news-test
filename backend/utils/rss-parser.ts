import Parser from 'rss-parser';
import { ObjectId } from 'mongodb';

import { Articles } from '../models/news-articles';

import { BBC_FEED_URL } from '../constants/url-constants';
import { INewsArticle } from '../types/types';

const parser: Parser<any, any> = new Parser({
  customFields: {
    item: [['media:thumbnail', 'image']],
  },
});

export async function addArticlesDB(): Promise<void> {
  let newArrayArticles: INewsArticle[] = [];

  const feed = await parser.parseURL(BBC_FEED_URL);

  feed.items.forEach((item: any) => {
    const todayNewsPool = createNewsObject(item);
    newArrayArticles.push(todayNewsPool);
  });

  await Articles.create(newArrayArticles);
}

function createNewsObject(item: any): INewsArticle {
  const generatedId = new ObjectId();

  const newObject: INewsArticle = {
    _id: generatedId,
    title: item.title,
    link: item.link,
    pubdate: item.pubDate,
    imageURL: item.image.$.url,
    content: item.content,
    contentSnippet: item.contentSnippet,
  };

  return newObject;
}
