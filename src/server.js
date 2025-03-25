import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import rootRouter from './routers/index.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';


const PORT = Number(getEnvVar('PORT', '3000'));
const server = express();
server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(pino({
        transport: {
            target: 'pino-pretty',
        }
    }));


export const setupServer = () => {

    server.use(rootRouter);
    server.use('*', notFoundHandler);
    server.use(errorHandler);
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};


