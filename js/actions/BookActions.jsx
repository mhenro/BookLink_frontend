import fetch from 'isomorphic-fetch';

export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR';
export const CHANGE_BOOK_PAGE = 'CHANGE_BOOK_PAGE';

/* actions for fetching the books array */
export const fetchBooks = (currentPage) => {
    const URL = "http://localhost:8080/booklink/BookController/books?"
        + "page=" + currentPage;
    return fetch(URL, {method: 'GET'})
        .then(response => Promise.all([response, response.json()]));
}

export const fetchBooksAction = () => {
    return {
        type: FETCH_BOOK_REQUEST
    }
}

export const fetchBooksSuccess = (payload) => {
    return {
        type: FETCH_BOOK_SUCCESS,
        payload
    }
}

export const fetchBooksError = () => {
    return {
        type: FETCH_BOOK_ERROR
    }
}

/* actions for the books paginator */
export const changeBookPage = (payload) => {
    return {
        type: CHANGE_BOOK_PAGE,
        payload
    }
}
