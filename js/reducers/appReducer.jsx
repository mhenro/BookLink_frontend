import {combineReducers} from 'redux';
import BookListReducer from './BookListReducer.jsx';
import GlobalReducer from './GlobalReducer.jsx';

const appReducer = combineReducers({
    BookListReducer,
    GlobalReducer
})

export default appReducer;