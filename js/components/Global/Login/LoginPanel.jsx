import React from 'react';
import { connect } from 'react-redux';
import './LoginPanel.css';

import {
    sendLogin,
    sendLoginSuccess,
    sendLoginError
} from '../../../actions/AuthActions.jsx';


class LoginPanel extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSendLogin('user', 'pswd');
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
                            <button type="submit" className="btn-logout">Выйти</button>
                        </div>

                        :
                        <div>
                            <label><b>Логин</b></label>
                            <br/>
                            <input type="text" placeholder="Введите логин" name="login" required/>
                            <br/>

                            <label><b>Пароль</b></label>
                            <br/>
                            <input type="password" placeholder="Введите пароль" name="password" required/>
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
        login: state.GlobalReducer.user.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendLogin: (username, password) => {
            return sendLogin(username, password).then(([response, json]) => {
                if (response.status === 200) {
                    dispatch(sendLoginSuccess(json));
                }
                else {
                    dispatch(sendLoginError());
                }
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);