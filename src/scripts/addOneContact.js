import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
        const newCont = createFakeContact();
        const currentCont = await readContacts();
        await currentCont.push(newCont);
        writeContacts(currentCont);
    } catch (error) {
        console.error(error);
    }
};

addOneContact();
