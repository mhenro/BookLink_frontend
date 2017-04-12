import fetch from 'isomorphic-fetch';

export const SEND_LOGIN_SUCCESS = 'SEND_LOGIN_SUCCESS';
export const SEND_LOGIN_ERROR = 'SEND_LOGIN_ERROR';

/* actions for auth */
export const sendLogin = (username, password) => {
    const URL = "http://localhost:8080/booklink/auth";
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: username,
            password: password
        })
    })
        .then(response => Promise.all([response, response.json()]))
        .catch(error => {
            alert(error);
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