import { Contact } from "../models/contacts.js";

export const getContacts = async ({page, perPage}) => {
    const skip = page > 0 ? ((page - 1) * perPage) : 0;

    const [totalItems, data] = await Promise.all([
        Contact.countDocuments(),
        Contact.find().skip(skip).limit(perPage)
    ]);
    const totalPages = Math.ceil(totalItems / perPage);

    return {
        data,
        page,
        perPage,
        totalItems,
        totalPages,
        hasPreviousPage: page > 1,
        hasNextPage: totalPages - page > 0
    };
};

export const getContactsById = (contactId) => {
    return Contact.findById(contactId);
};

export const createContact = async (payload) => {
    const contactData = await Contact.create(payload);
    return contactData;
};

export const updateContact = async (contactId, contact) => {
    return Contact.findByIdAndUpdate(contactId, contact, {new: true});
};

export const deleteContact = async (contactId) => {
    return Contact.findByIdAndDelete(contactId);
 };
