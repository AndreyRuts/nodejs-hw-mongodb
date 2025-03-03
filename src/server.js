import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';


const PORT = Number(getEnvVar('PORT', '3000'));


export const setupServer = () => {
    const server = express();
    server.use(pino({
        transport: {
            target: 'pino-pretty',
        }
    }));
    server.use(cors());






    server.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
    });

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};


