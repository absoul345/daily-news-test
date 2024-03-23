import { Schema, model } from 'mongoose';
import Joi from 'joi';

const joiArticleSchema = Joi.object({
  imageURL: Joi.string().min(1).required(),
  title: Joi.string().min(1).required(),
  link: Joi.string().min(1).required(),
  pubdate: Joi.string().min(0).required(),
  content: Joi.string().min(1).required(),
  contentSnippet: Joi.string().min(1).required(),
});

const joiUpdateArticleSchema = Joi.object({
  imageURL: Joi.string().min(1),
  title: Joi.string().min(1),
  link: Joi.string().min(1),
  pubdate: Joi.string().min(0),
  content: Joi.string().min(1),
  contentSnippet: Joi.string().min(1),
});

const articleSchema = new Schema({
  _id: Schema.Types.ObjectId,
  imageURL: String,
  title: String,
  link: String,
  pubdate: String,
  content: String,
  contentSnippet: String,
});

const Articles = model('articles', articleSchema);

export { joiArticleSchema, joiUpdateArticleSchema, Articles };
