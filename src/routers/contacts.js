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
import { upload } from '../middlewares/upload.js';


const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));
contactsRouter.get('/:id', isValidID, ctrlWrapper(getContactsByIdController));
contactsRouter.post('/', upload.single('photo'), validateBody(postContactSchema), ctrlWrapper(createContactController)); // duplecate 4 patch
contactsRouter.patch('/:id', upload.single('photo'), isValidID, validateBody(patchContactSchema), ctrlWrapper(patchContactController));
contactsRouter.delete('/:id', isValidID, ctrlWrapper(deleteContactController));


export default contactsRouter;
