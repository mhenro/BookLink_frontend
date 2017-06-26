import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR,
    CHANGE_BOOKS_PAGE,
    FETCH_BOOK_TEXT_REQUEST,
    FETCH_BOOK_TEXT_SUCCESS,
    FETCH_BOOK_TEXT_ERROR} from '../actions/BookActions.jsx';

const initialState = {
    currentPage: 1,
    pageCount: 1,
    pageSize: 10,
    totalResults: 0,
    sortFields: 'bookId',
    sortDirections: 'asc',
    list: [],

    currentBookId: 0,
    currentBookData: {}
};

const BookListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOKS_SUCCESS:
            //return {...state, books: action.payload};
            return Object.assign({}, state, action.payload);

        case FETCH_BOOKS_ERROR:
            return state;

        case CHANGE_BOOKS_PAGE:
            return Object.assign({}, state, action.payload);

        case FETCH_BOOK_TEXT_REQUEST:
            return Object.assign({}, state, {currentBookId: action.bookId});

        case FETCH_BOOK_TEXT_SUCCESS:
            return Object.assign({}, state, {currentBookData: action.payload});

        default:
            return state;
    }
};

export default BookListReducer;