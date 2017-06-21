import doFetch from './fetch.js';

/* actions for fetching the books array */
export const fetchAuthorBooks = (authorId) => {
    return doFetch('http://localhost:8080/booklink/BookController/books?page=' + currentPage);
};