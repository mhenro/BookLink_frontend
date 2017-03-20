import fetch from 'isomorphic-fetch';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const CHANGE_BOOKS_PAGE = 'CHANGE_BOOKS_PAGE';

export const FETCH_BOOK_TEXT_REQUEST = 'FETCH_BOOK_TEXT';
export const FETCH_BOOK_TEXT_SUCCESS = 'FETCH_BOOK_TEXT_SUCCESS';
export const FETCH_BOOK_TEXT_ERROR = 'FETCH_BOOK_TEXT_ERROR';

/* actions for fetching the books array */
export const fetchBooks = (currentPage) => {
    const URL = "http://localhost:8080/booklink/BookController/books?"
        + "page=" + currentPage;
    return fetch(URL, {method: 'GET'})
        .then(response => Promise.all([response, response.json()]));
};

export const fetchBooksAction = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
};

export const fetchBooksSuccess = (payload) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload
    }
};

export const fetchBooksError = () => {
    return {
        type: FETCH_BOOKS_ERROR
    }
};

/* actions for the books paginator */
export const changeBookPage = (payload) => {
    return {
        type: CHANGE_BOOKS_PAGE,
        payload
    }
};

/* actions for fetching book's text */
export const fetchBookText = (bookId) => {
    const URL = "http://localhost:8080/booklink/BookController/books/" + bookId;
    return fetch(URL, {method: 'GET'})
        .then(response => Promise.all([response, response.json()]));
};

export const fetchBookTextRequest = (bookId) => {
    return {
        type: FETCH_BOOK_TEXT_REQUEST,
        bookId
    }
}

export const fetchBookTextSuccess = (payload) => {
    return {
        type: FETCH_BOOK_TEXT_SUCCESS,
        payload
    }
};

export const fetchBookTextError = () => {
    return {
        type: FETCH_BOOK_TEXT_ERROR
    }
}