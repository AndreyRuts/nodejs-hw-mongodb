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

import { postContactSchema, patchContactSchema } from '../validation/contact.js';

import { isValidID } from '../middlewares/isValidID.js';
import { validateBody } from '../middlewares/validateBody.js';


const contactsRouter = Router();
// const jsonParser = express.json();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));
contactsRouter.get('/contacts/:id', isValidID, ctrlWrapper(getContactsByIdController));
contactsRouter.post('/contacts', validateBody(postContactSchema), ctrlWrapper(createContactController));
contactsRouter.patch('/contacts/:id', isValidID, validateBody(patchContactSchema), ctrlWrapper(patchContactController));
contactsRouter.delete('/contacts/:id', isValidID, ctrlWrapper(deleteContactController));


export default contactsRouter;
