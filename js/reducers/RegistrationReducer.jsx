import {
    SET_REG_LOGIN,
    SET_REG_PASSWORD,
    SET_REG_EMAIL,
    SEND_CREDENTIALS_SUCCESS,
    SEND_CREDENTIALS_ERROR
} from '../actions/RegistrationActions.jsx';

const initialState = {
    login: '',
    password: '',
    email: '',
    success: false
};

const RegistrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_REG_LOGIN:
            return Object.assign({}, state, {login: action.login});

        case SET_REG_PASSWORD:
            return Object.assign({}, state, {password: action.password});

        case SET_REG_EMAIL:
            return Object.assign({}, state, {email: action.email});

        case SEND_CREDENTIALS_SUCCESS:
            return Object.assign({}, state, {success: true});

        case SEND_CREDENTIALS_ERROR:
            return Object.assign({}, state, {success: false});

        default:
            return state;
    }
};

export default RegistrationReducer;