import { getContacts, getContactsById } from '../services/contacts.js';



export const getContactsController = async (req, res) => {
    const contacts = await getContacts();
    res.status(200).json({
                status: 200,
                message: "Successfully found contacts!",
                data: contacts
            });
};

export const getContactsByIdController = async (req, res) => {
    const { id } = req.params;
    const contact = await getContactsById(id);

    if (!contact) {
        res.status(404).json({
            message: 'Contact not found'
        });
    } else {
        res.status(200).json({
            status: 200,
            message: `Successfully found contact with id ${contact.id}`,
            data: contact
        });
    }
};




