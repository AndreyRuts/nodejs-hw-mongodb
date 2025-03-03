import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contArr = await readContacts();
        return contArr.length;
    } catch (error) {
        console.error(error);
    }
};

console.log(await countContacts());
