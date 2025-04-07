import express from 'express';

import {
    registerController,
    loginController,
    logoutController,
    refreshController,
    requestPasswordResetController,
    resetPasswordController,
    getOauthUrlController,
    confirmOAuthController
} from '../controllers/auth.js';
import {
    registerSchema,
    loginSchema,
    requestPasswordResetSchema,
    resetPasswordSchema,
    confirmOAuthSchema
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
    ctrlWrapper(resetPasswordController)
);
authRouter.get('/get-oauth-url', ctrlWrapper(getOauthUrlController));
authRouter.post(
    '/confirm-oauth',
    validateBody(confirmOAuthSchema),
    ctrlWrapper(confirmOAuthController));



export default authRouter;

