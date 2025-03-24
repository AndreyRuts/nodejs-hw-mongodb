import createHttpError from "http-errors";
import bcrypt from 'bcrypt';

import { User } from "../models/user.js";
import { Session } from "../models/session.js";


export const registerUser = async (payload) => {
    const user = await User.findOne({ email: payload.email });

    if (user !== null) {
        throw createHttpError.Conflict('Email in use');
    }
    payload.password = await bcrypt.hash(payload.password, 10);
    return User.create(payload);
};

export const loginUser = async (email, password) => {
    const userData = await User.findOne({ email });

    if (userData === null) {
        throw createHttpError.Unauthorized('Email or password is incorrect');
    }

    const isMatch = await bcrypt.compare(password, userData.password);
    if (isMatch !== true) {
        throw createHttpError.Unauthorized('Email or password is incorrect');
    }

    await Session.deleteOne({ userId: userData._id });
    return Session.create({
        userId: userData._id,
        accessToken: 'access token',
        refreshToken: 'refresh token',
        accessTokenValidUntil: new Date(),
        refreshTokenValidUntil: new Date()
    });

};
