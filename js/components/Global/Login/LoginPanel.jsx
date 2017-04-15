import React from 'react';
import { connect } from 'react-redux';
import './LoginPanel.css';

import {
    sendLogin,
    sendLoginSuccess,
    sendLoginError,
    setLogin,
    setPassword,
    setToken
} from '../../../actions/AuthActions.jsx';


class LoginPanel extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSendLogin(this.props.login, this.props.password);
    }

    onLoginChange(event) {
        this.props.onSetLogin(event.target.value);
    }

    onPasswordChange(event) {
        this.props.onSetPassword(event.target.value);
    }

    onLogout() {
        this.props.onLogout();
    }

    render() {
        return (
            <form className="login-panel" onSubmit={this.onSubmit} method="POST">
                <div className="avatar-container">
                    <img src="images/avatar.png" alt="avatar" className="avatar"/>
                </div>
                <div className="login-container">
                    {this.props.registered ?
                        <div>
                            Привет, {this.props.login}!
                            <br/>
                            <button type="submit" onClick={this.onLogout} className="btn-logout">Выйти</button>
                        </div>

                        :
                        <div>
                            <label><b>Логин</b></label>
                            <br/>
                            <input type="text" onChange={this.onLoginChange} placeholder="Введите логин" name="login" required/>
                            <br/>

                            <label><b>Пароль</b></label>
                            <br/>
                            <input type="password" onChange={this.onPasswordChange} placeholder="Введите пароль" name="password" required/>
                            <br/>

                            <button type="submit" className="btn-login">Войти</button>
                            <span className="psw">Забыли <a href="#">пароль?</a></span>
                        </div>
                    }
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registered: state.GlobalReducer.registered,
        login: state.GlobalReducer.user.login,
        password: state.GlobalReducer.user.password
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendLogin: (username, password) => {
            return sendLogin(username, password).then(([response, json]) => {
                if (response.status === 200) {
                    //dispatch(sendLoginSuccess(json));
                    dispatch(setToken(json.message));
                }
                else {
                    dispatch(sendLoginError());
                }
            })
        },

        onSetLogin: (login) => {
            dispatch(setLogin(login));
        },

        onSetPassword: (password) => {
            dispatch(setPassword(password));
        },

        onLogout: () => {
            dispatch(setToken(''));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);