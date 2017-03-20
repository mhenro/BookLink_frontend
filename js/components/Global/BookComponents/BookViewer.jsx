import React from 'react';
import { connect } from 'react-redux';
import './BookViewer.css';

import {
    fetchBookText, fetchBookTextSuccess, fetchBookTextError} from '../../../actions/BookActions.jsx';

class BookViewer extends React.Component {
    componentDidMount() {
        this.props.onFetchBook(this.props.currentBookId);
    }

    render() {
        return (
            <div className="book-viewer">
                <br/>
                {this.props.currentBookData.text}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentBookId: state.BookListReducer.currentBookId,
        currentBookData: state.BookListReducer.currentBookData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchBook: (bookId) => {
            return fetchBookText(bookId).then(([response, json]) => {
                if (response.status === 200) {
                    dispatch(fetchBookTextSuccess(json));
                }
                else {
                    dispatch(fetchBookTextError());
                }
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookViewer);