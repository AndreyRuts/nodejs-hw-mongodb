import express from 'express';

import contactsRouter from '../routers/contacts.js';
import authRouter from './auth.js';

const rootRouter = express.Router();

rootRouter.use('/contacts', contactsRouter);
rootRouter.use('/auth', authRouter);

export default rootRouter;
