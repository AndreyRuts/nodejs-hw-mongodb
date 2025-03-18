
function parseData (value) {
    if (typeof value === 'undefined') {
        return undefined;
    }
    console.log(typeof(value));
    
    return value;
    
};

export const parseFilterParams = (query) => {

    const { type, isFavourite } = query;
    const parsedType = parseData(type);
    const parsedIsFavourite = parseData(isFavourite);

    return {
        contactType: parsedType,
        isFavourite: parsedIsFavourite
    };
};
