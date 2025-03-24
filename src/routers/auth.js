import express from 'express';

import { registerController, loginController } from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerSchema, loginSchema } from '../validation/userAuth.js';
import { validateBody } from '../middlewares/validateBody.js';

const authRouter = express.Router();

authRouter.use(
    '/register',
    validateBody(registerSchema),
    ctrlWrapper(registerController)
);
authRouter.use(
    '/login',
    validateBody(loginSchema),
    ctrlWrapper(loginController)
);


export default authRouter;

