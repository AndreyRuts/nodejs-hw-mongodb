import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './services/getEnvVar.js';
import { Contact } from './models/contacts.js';


const PORT = Number(getEnvVar('PORT', '3000'));
const server = express();
server.use(pino({
        transport: {
            target: 'pino-pretty',
        }
    }));
    server.use(cors());


export const setupServer = () => {
    
    server.get('/contacts', async (req, res) => {
        try {
            const contacts = await Contact.find(); 
            res.status(200).json({
                status: 200,
                message: "Successfully found contacts!",
                data: contacts
            });
        } catch (error) {
            console.error(error);
        }
    });

    server.get('/contacts/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const contact = await Contact.findById(id);
            
            res.status(200).json({
                status: 200,
                message: `Successfully found contact with id ${contact.id}`,
                data: contact
            });

        } catch (error) {
            console.error(error);
            res.status(404).json({
                message: 'Contact not found'
            });
        }
    });

    server.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
    });

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};


