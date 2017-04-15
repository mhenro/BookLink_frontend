import {
    SET_LOGIN,
    SET_PASSWORD,
    SET_TOKEN
} from '../actions/AuthActions.jsx';

const initialState = {
    registered: false,
    token: '',
    user: {
        login: 'TestUser',
        password: 'n/a'
    }
};

const GlobalReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN:
            return Object.assign({}, state, {user: {
                login: action.login,
                password: state.user.password
            }});

        case SET_PASSWORD:
            return Object.assign({}, state, {user: {
                login: state.user.login,
                password: action.password
            }});

        case SET_TOKEN:
            if (action.token !== '') {
                return Object.assign({}, state, {token: action.token, registered: true});
            } else {
                return Object.assign({}, state, {registered: false});   //for logout
            }

        default:
            return state;
    }
};

export default GlobalReducer;