import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    phoneNumber: {
        type: String,
        requred: true
    },
    email: {
        type: String
    },
    isFavourite: {
        type: Boolean,
        default: false
    },
    contactType: {
        type: String,
        enum: ['work', 'home', 'personal'],
        requred: true,
        default: 'personal'
    },
});

export const Contact = mongoose.model('Contact', contactsSchema);
