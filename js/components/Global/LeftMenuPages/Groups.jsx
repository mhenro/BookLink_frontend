import React from 'react';
import { connect } from 'react-redux';

class Groups extends React.Component {
    render() {
        return (
            <div>
                {this.props.registered ?
                    <div>
                        <h1>My groups</h1>
                    </div>
                    :
                    <div>
                        Пожалуйста, войдите в систему, чтобы получить доступ к этой странице
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registered: state.GlobalReducer.registered
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);