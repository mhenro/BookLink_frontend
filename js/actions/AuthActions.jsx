import doFetch from './fetch.js';

export const SEND_LOGIN_SUCCESS = 'SEND_LOGIN_SUCCESS';
export const SEND_LOGIN_ERROR = 'SEND_LOGIN_ERROR';

export const SET_LOGIN = 'SET_LOGIN';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_TOKEN = 'SET_TOKEN';

/* actions for auth */
export const sendLogin = (username, password) => {
    return doFetch('http://localhost:8080/booklink/auth', {
        login: username,
        password: password
    });
};

export const sendLoginSuccess = (payload) => {
    return {
        type: SEND_LOGIN_SUCCESS,
        payload
    }
};

export const sendLoginError = () => {
    return {
        type: SEND_LOGIN_ERROR
    }
};

export const setLogin = (login) => {
    return {
        type: SET_LOGIN,
        login
    }
};

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        password
    }
};

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        token
    }
};