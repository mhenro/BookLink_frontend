import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BookList from '../BookComponents/BookList.jsx';
import SearchPanel from '../SearchPanel.jsx';
import Paginator from '../Paginator.jsx';

import {receiveBooksAction, fetchBooksAction, fetchBooksSuccess, fetchBooksError, fetchBooks} from '../../../actions/BookActions.jsx';

class PageBooks extends React.Component {
    onClick() {
        this.props.onTodoClick();
    }

    render() {
        return (
            <div>
                <br/>
                <input onClick={this.onClick.bind(this)} type="button" value="Читать"/>
                <br/>
                <SearchPanel blankText="Найти книгу..."/>
                <br/>
                <Paginator />
                <br/>
                <BookList bookList={this.props.bookList} />
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookList: state.BookListReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: () => {
            dispatch(fetchBooksAction());
            return fetchBooks().then(([response, json]) => {
                if (response.status === 200) {
                    dispatch(fetchBooksSuccess(json));
                }
                else {
                    dispatch(fetchBooksError());
                }
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageBooks);