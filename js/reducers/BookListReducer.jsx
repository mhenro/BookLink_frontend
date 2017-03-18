import {FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, FETCH_BOOK_ERROR} from '../actions/BookActions.jsx';

const initialState = {
    books: {
        list: []
    }
}

const BookListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOK_REQUEST:
            return state;

        case FETCH_BOOK_SUCCESS:
            return {...state, books: action.payload};

        default:
            return state
    }
};

export default BookListReducer;