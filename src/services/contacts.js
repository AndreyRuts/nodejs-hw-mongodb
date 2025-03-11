import { Contact } from "../models/contacts.js";

export const getContacts = () => {
    return Contact.find();
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
