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
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        requred: true
    },
    photo: {
        type: String,
        default: null
    }
    },
        {
            timestamps: true,
        },
);

export const Contact = mongoose.model('Contacts', contactsSchema);
