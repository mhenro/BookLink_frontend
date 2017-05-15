import {combineReducers} from 'redux';
import BookListReducer from './BookListReducer.jsx';
import RegistrationReducer from './RegistrationReducer.jsx';
import AuthorReducer from './AuthorReducer.jsx';
import GlobalReducer from './GlobalReducer.jsx';

const appReducer = combineReducers({
    BookListReducer,
    RegistrationReducer,
    AuthorReducer,
    GlobalReducer
});

export default appReducer;