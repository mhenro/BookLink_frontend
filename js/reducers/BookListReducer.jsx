import {
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_ERROR,
    CHANGE_BOOK_PAGE} from '../actions/BookActions.jsx';

const initialState = {
    currentPage: 1,
    pageCount: 1,
    pageSize: 10,
    totalResults: 0,
    sortFields: 'bookId',
    sortDirections: 'asc',
    list: []
}

const BookListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOK_REQUEST:
            return state;

        case FETCH_BOOK_SUCCESS:
            //return {...state, books: action.payload};
            return Object.assign({}, state, action.payload);

        case FETCH_BOOK_ERROR:
            return state;

        case CHANGE_BOOK_PAGE:
            return Object.assign({}, state, action.payload);

        default:
            return state
    }
};

export default BookListReducer;