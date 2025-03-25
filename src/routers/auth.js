import express from 'express';

import {
    registerController,
    loginController,
    logoutController,
    refreshController
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerSchema, loginSchema } from '../validation/userAuth.js';
import { validateBody } from '../middlewares/validateBody.js';

const authRouter = express.Router();

authRouter.post(
    '/register',
    validateBody(registerSchema),
    ctrlWrapper(registerController)
);
authRouter.post(
    '/login',
    validateBody(loginSchema),
    ctrlWrapper(loginController)
);
authRouter.post('/refresh', ctrlWrapper(refreshController));




authRouter.post('/logout', ctrlWrapper(logoutController));

export default authRouter;

