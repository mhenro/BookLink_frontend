import React from 'react';
import { connect } from 'react-redux';
import './MeContainer.css';

import Me from '../components/Global/LeftMenuPages/Me.jsx';
import AuthorInfo from '../components/Global/author/AuthorInfo.jsx';
import AuthorDashboard from '../components/Global/author/AuthorDashboard.jsx';

class MeContainer extends React.Component {
    render() {
        return (
            <div className="me-container">
                <br/>
                <div className="header">
                    <div className="author-name">
                        {this.props.authorName}
                    </div>
                    <div className="portal-name">
                        {this.props.portalName}
                    </div>
                </div>
                <br/>
                <div className="body">
                    <div className="body-left">
                        <div className="author-avatar">
                            <img src="images/avatar.png" alt="avatar"/>
                        </div>
                        <div className="buttons">
                            <button>Написать сообщение</button>
                            <button>Добавить в друзья</button>
                        </div>
                    </div>
                    <div className="body-right">
                        <AuthorInfo birthday={this.props.birthday}
                                    city={this.props.city}
                                    lastUpdate={this.props.lastUpdate}
                                    volume={this.props.volume}
                                    rating={this.props.rating}
                                    visitors={this.props.visitors}
                        />
                        <AuthorDashboard/>
                    </div>
                </div>
                <div className="clear-fix"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registered: state.GlobalReducer.registered,
        token: state.GlobalReducer.token,
        authorName: state.AuthorReducer.authorName,
        portalName: state.AuthorReducer.portalName,
        birthday: state.AuthorReducer.birthday,
        city: state.AuthorReducer.city,
        lastUpdate: state.AuthorReducer.lastUpdate,
        volume: state.AuthorReducer.volume,
        rating: state.AuthorReducer.rating,
        visitors: state.AuthorReducer.visitors
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MeContainer);