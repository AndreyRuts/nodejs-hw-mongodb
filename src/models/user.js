import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
        name: {
            type: String,
            requird: true
        },
        email: {
            type: String,
            requird: true,
            unique: true
        },
        password: {
            type: String,
            requird: true
        }
    },
    {
       timestamps: true
    }
);

usersSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

export const User = mongoose.model('Users', usersSchema);
