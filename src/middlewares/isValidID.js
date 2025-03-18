import { isValidObjectId } from "mongoose";
import createHttpError from "http-errors";

export const isValidID = (req, res, next) => {
    const { id } = req.params;

    if (isValidObjectId(id) !== true) {
        return next(createHttpError.BadRequest('ID is not valid'));
    }

    next();
};
