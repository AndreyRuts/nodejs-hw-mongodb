import { registerUser, loginUser } from "../services/auth.js";

export const registerController = async (req, res) => {
    const user = await registerUser(req.body);
    res.status(201).json({status: 201, message: 'Successfully registered a user!', data: user});
};

export const loginController = async (req, res) => {
    const session = await loginUser(req.body.email, req.body.password);
    res.status(200).json({
        status: 200,
        message: 'Successfully logged in an user!',
        data: {
            accessToken: session.accessToken
        }
    });
};
