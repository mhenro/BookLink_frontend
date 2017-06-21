import React from 'react';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import './Registration.css';

import {
    setRegLogin,
    setRegPassword,
    setRegEmail,
    sendCredentials,
    sendCredetialsSuccess,
    sendCredentialsError
} from '../../../actions/RegistrationActions.jsx';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.sendCredentials(this.props.login, this.props.password, this.props.email);
    }

    onLoginChange(event) {
        this.props.setRegLogin(event.target.value);
    }

    onPasswordChange(event) {
        this.props.setRegPassword(event.target.value);
    }

    onEmailChange(event) {
        this.props.setRegEmail(event.target.value);
    }

    render() {
        return (
            <div>
                {this.props.success ?
                    <div>
                        Регистрация прошла успешно!<br/>
                        На указанный вами адрес электронной почты отправлено письмо с подробностями
                        активации вашего аккаунта!<br/>
                        Спасибо, что пользуетесь нашим сервисом! :)
                    </div>
                    :
                    <div className="registration-form">
                        <div className="module">
                            <form className="form" onSubmit={this.onSubmit}>
                                <input type="text" onChange={this.onLoginChange} placeholder="Логин" name="login" className="textbox" required/>
                                <input type="password" onChange={this.onPasswordChange} placeholder="Пароль" name="password" className="textbox" required/>
                                <input type="password" placeholder="Подтвердите пароль" className="textbox" required/>
                                <input type="text" onChange={this.onEmailChange} placeholder="Email" name="email" className="textbox" required/>
                                <button type="submit" className="button">"Зарегистрироваться! :)</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.RegistrationReducer.login,
        password: state.RegistrationReducer.password,
        email: state.RegistrationReducer.email,
        success: state.RegistrationReducer.success
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendCredentials: (login, password, email) => {
            return sendCredentials(login, password, email).then(([response, json]) => {
                if (response.status === 200 && json.message === 'success') {
                    dispatch(sendCredetialsSuccess());
                }
                else {
                    dispatch(sendCredentialsError(json.error.message));
                    NotificationManager.error(response.statusText, 'Ошибка');
                }
            }).catch(error => {
                NotificationManager.error(error.message, 'Ошибка');
            })
        },
        setRegLogin: (login) => {
            dispatch(setRegLogin(login));
        },
        setRegPassword: (password) => {
            dispatch(setRegPassword(password));
        },
        setRegEmail: (email) => {
            dispatch(setRegEmail(email));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);