import doFetch from './fetch.js';

export const FETCH_AUTHOR_DETAILS_SUCCESS = 'FETCH_AUTHOR_DETAILS_SUCCESS';
export const FETCH_AUTHOR_DETAILS_ERROR = 'FETCH_AUTHOR_DETAILS_ERROR';

export const FETCH_AUTHOR_BOOKS_SUCCESS = 'FETCH_AUTHOR_BOOKS_SUCCESS';
export const FETCH_AUTHOR_BOOKS_ERROR = 'FETCH_AUTHOR_BOOKS_ERROR';
export const CHANGE_AUTHOR_BOOKS_PAGE = 'CHANGE_AUTHOR_BOOKS_PAGE';

/* actions for fetching author details */
export const fetchAuthorDetails = (login) => {
    return doFetch(`http://localhost:8080/booklink/AuthorController/authors/${login}`);
};

export const fetchAuthorDetailsSuccess = (payload) => {
    return {
        type: FETCH_AUTHOR_DETAILS_SUCCESS,
        payload
    }
};

export const fetchAuthorDetailsError = () => {
    return {
        type: FETCH_AUTHOR_DETAILS_ERROR
    }
};

/* actions for fetching the books array */
export const fetchBooks = (login, currentPage) => {
    return doFetch(`http://localhost:8080/booklink/AuthorController/books/${login}?page=${currentPage}`);
};

export const fetchBooksSuccess = (payload) => {
    return {
        type: FETCH_AUTHOR_BOOKS_SUCCESS,
        payload
    }
};

export const fetchBooksError = () => {
    return {
        type: FETCH_AUTHOR_BOOKS_ERROR
    }
};

/* actions for the books paginator */
export const changeBookPage = (payload) => {
    return {
        type: CHANGE_AUTHOR_BOOKS_PAGE,
        payload
    }
};