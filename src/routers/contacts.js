// import express from 'express';
import { Router } from 'express';

import {
    getContactsController,
    getContactsByIdController,
    createContactController,
    patchContactController,
    deleteContactController
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';


const contactsRouter = Router();
// const jsonParser = express.json();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));
contactsRouter.get('/contacts/:id', ctrlWrapper(getContactsByIdController));
contactsRouter.post('/contacts', ctrlWrapper(createContactController));
contactsRouter.patch('/contacts/:id', ctrlWrapper(patchContactController));
contactsRouter.delete('/contacts/:id', ctrlWrapper(deleteContactController));


export default contactsRouter;
