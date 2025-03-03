import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const currArr = await readContacts();
        currArr.pop();
        writeContacts(currArr);

    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
