import {combineReducers} from 'redux';
import BookListReducer from './BookListReducer.jsx';
import RegistrationReducer from './RegistrationReducer.jsx';
import GlobalReducer from './GlobalReducer.jsx';

const appReducer = combineReducers({
    BookListReducer,
    RegistrationReducer,
    GlobalReducer
});

export default appReducer;