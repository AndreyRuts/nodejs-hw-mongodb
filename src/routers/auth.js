import express from 'express';

import {
    registerController,
    loginController,
    logoutController,
    refreshController,
    requestPasswordResetController,
    resetPasswordController
} from '../controllers/auth.js';
import {
    registerSchema,
    loginSchema,
    requestPasswordResetSchema,
    resetPasswordSchema
} from '../validation/userAuth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
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
authRouter.post(
    '/send-reset-email',
    validateBody(requestPasswordResetSchema),
    ctrlWrapper(requestPasswordResetController)
);
authRouter.post(
    '/reset-pwd',
    validateBody(resetPasswordSchema),
    ctrlWrapper(resetPasswordController));

export default authRouter;

