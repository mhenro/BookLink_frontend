let nextBookId = 0;
export const addBookAction = (book) => {
    return {
        type: "ADD_BOOK",
        id: nextBookId++,
        book: book
    }
};