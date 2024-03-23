import express from 'express';

import { joiAdminSchema } from '../models/admin';

import * as controllers from '../controllers';

import { controllerWrapper } from '../middlewares/controller-wrapper';
import { authenticate } from '../middlewares/authenticate';

import { validation } from '../helpers/validation';

const router = express.Router();

router.post(
  '/register',
  validation(joiAdminSchema),
  controllerWrapper(controllers.register)
);

router.post(
  '/login',
  validation(joiAdminSchema),
  controllerWrapper(controllers.login)
);

router.post('/logout', authenticate, controllerWrapper(controllers.logout));

export default router;
