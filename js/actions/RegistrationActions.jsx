import doFetch from './fetch.js';

export const SET_REG_LOGIN = 'SET_REG_LOGIN';
export const SET_REG_PASSWORD = 'SET_REG_PASSWORD';
export const SET_REG_EMAIL = 'SET_REG_EMAIL';

export const SEND_CREDENTIALS_SUCCESS = 'SEND_CREDENTIALS_SUCCESS';
export const SEND_CREDENTIALS_ERROR = 'SEND_CREDENTIALS_ERROR';

export const setRegLogin = (login) => {
    return {
        type: SET_REG_LOGIN,
        login
    }
};

export const setRegPassword = (password) => {
    return {
        type: SET_REG_PASSWORD,
        password
    }
};

export const setRegEmail = (email) => {
    return {
        type: SET_REG_EMAIL,
        email
    }
};

export const sendCredentials = (login, password, email) => {
    return doFetch('http://localhost:8080/booklink/registration', {
        login: login,
        password: password,
        email: email
    });
};

export const sendCredetialsSuccess = () => {
    return {
        type: SEND_CREDENTIALS_SUCCESS
    }
};

export const sendCredentialsError = () => {
    return {
        type: SEND_CREDENTIALS_ERROR
    }
};