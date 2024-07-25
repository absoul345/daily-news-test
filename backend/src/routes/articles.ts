import express from 'express';

import * as controllers from '../controllers';

import * as articlesSchema from '../models/news-articles';

import { controllerWrapper } from '../middlewares/controller-wrapper';
import { authenticate } from '../middlewares/authenticate';

import { validation } from '../helpers/validation';

const router = express.Router();

router.get('/', controllerWrapper(controllers.getAll));

router.get('/:id', controllerWrapper(controllers.getById));

router.post(
  '/',
  authenticate,
  validation(articlesSchema.joiArticleSchema),
  controllerWrapper(controllers.add)
);

router.delete('/:id', authenticate, controllerWrapper(controllers.removeById));

router.patch(
  '/:id',
  authenticate,
  validation(articlesSchema.joiUpdateArticleSchema),
  controllerWrapper(controllers.updateById)
);

export default router;
