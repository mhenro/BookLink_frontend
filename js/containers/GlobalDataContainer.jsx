import React from 'react';
import { connect } from 'react-redux';

import {
    setLogin,
    setToken
} from '../actions/AuthActions.jsx';

class GlobalDataContainer extends React.Component {
    componentDidMount() {
        let token = sessionStorage.getItem('token'),
            username = sessionStorage.getItem('username');

        if (this.props.token === '' && token) {
            this.props.onSetToken(token);
            if (username) {
                this.props.onSetLogin(username);
            }
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        registered: state.GlobalReducer.registered,
        token: state.GlobalReducer.token,
        login: state.GlobalReducer.user.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetToken: (token) => {
            dispatch(setToken(token));
        },

        onSetLogin: (login) => {
            dispatch(setLogin(login));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalDataContainer);