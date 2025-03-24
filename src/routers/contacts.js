import { Router } from 'express';

import {
    getContactsController,
    getContactsByIdController,
    createContactController,
    patchContactController,
    deleteContactController
} from '../controllers/contacts.js';

import { postContactSchema, patchContactSchema } from '../validation/contact.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidID } from '../middlewares/isValidID.js';
import { validateBody } from '../middlewares/validateBody.js';


const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));
contactsRouter.get('/:id', isValidID, ctrlWrapper(getContactsByIdController));
contactsRouter.post('/', validateBody(postContactSchema), ctrlWrapper(createContactController));
contactsRouter.patch('/:id', isValidID, validateBody(patchContactSchema), ctrlWrapper(patchContactController));
contactsRouter.delete('/:id', isValidID, ctrlWrapper(deleteContactController));


export default contactsRouter;
