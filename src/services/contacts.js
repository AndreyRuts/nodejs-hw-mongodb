import { Contact } from "../models/contacts.js";

export const getContacts = () => {
    return Contact.find();
};

export const getContactsById = (contactId) => {
    return Contact.findById(contactId);
};
