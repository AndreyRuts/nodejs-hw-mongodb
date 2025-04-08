function parseSortBy (value) {
    if (typeof value === 'undefined' || value !== 'name') {
        return '_id';
    }
    return value;
}

function parseSortOrder(value) {
    if (typeof value === 'undefined' || (value !== 'asc' && value !== 'desc')) {
        return 'asc';
    }
    return value;
}



export const parseSortParams = (query) => {
    const { sortBy, sortOrder } = query;
    const parsedSortBy = parseSortBy(sortBy);
    const parsedSortOrder = parseSortOrder(sortOrder);
    console.log(query);
    return {
        sortBy: parsedSortBy,
        sortOrder: parsedSortOrder
    };
};
