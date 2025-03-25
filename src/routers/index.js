import express from 'express';

import { authenticate } from '../middlewares/authenticate.js';

import contactsRouter from '../routers/contacts.js';
import authRouter from './auth.js';

const rootRouter = express.Router();

rootRouter.use('/contacts', authenticate, contactsRouter);
rootRouter.use('/auth', authRouter);

export default rootRouter;
