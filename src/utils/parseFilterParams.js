function parseData (value) {
    if (typeof value === 'undefined') {
        return undefined;
    }
    return value;
};

export const parseFilterParams = (query) => {

    const { type, isFavourite } = query;
    const parsedType = parseData(type);
    const parsedisFavourite = parseData(isFavourite);

    return {
        contactType: parsedType,
        isFavourite: parsedisFavourite
    };
};
