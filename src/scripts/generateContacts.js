import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    try {
        const currentContacts = await readContacts();
        const newContacts = [];
        for (let i = 0; i < number; i++) {
            newContacts.push(createFakeContact());
        }
        const updateContacts = [...currentContacts, ...newContacts];
        await writeContacts(updateContacts);
    } catch (error) {
        console.error(error);
    }
};

generateContacts(5);
