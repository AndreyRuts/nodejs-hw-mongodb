import createHttpError from 'http-errors';

import {
    getContacts,
    getContactsById,
    createContact,
    updateContact,
    deleteContact
} from '../services/contacts.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';


export const getContactsController = async (req, res) => {
    const { page, perPage } = parsePaginationParams(req.query);
    const { sortBy, sortOrder } = parseSortParams(req.query);
    const filter = parseFilterParams(req.query);
    const response = await getContacts({
        page,
        perPage,
        sortBy,
        sortOrder,
        filter,
        userId: req.user.id
    });

    res.status(200).json({
                status: 200,
                message: "Successfully found contacts!",
                data: response
            });
};

export const getContactsByIdController = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const contact = await getContactsById(id, userId);

    if (!contact) {
        throw createHttpError(404, 'Contact not found');
    }

    res.status(200).json({
        status: 200,
        message: `Successfully found contact with id ${contact.id}`,
        data: contact
    });
};

export const createContactController = async (req, res) => {
    const contact = {
        ...req.body,
        userId: req.user.id
    };
    const newContact = await createContact(contact);

    res.status(201).json({
        status: 201,
        message: 'Successfully created a contact!',
        data: newContact
    });
};

export const patchContactController = async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;
    const updatedContact = await updateContact(id, userId, req.body);

    if (!updatedContact) {
        throw createHttpError(404, 'Contact not found');
    }

    res.json({
        status: 200,
        message: 'Successfully patched a contact!',
        data: updatedContact
    });
};

export const deleteContactController = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const result = await deleteContact(id, userId);

    if (!result) {
        throw createHttpError(404, 'Contact not found');
    }

    res.status(204).send();
 };

