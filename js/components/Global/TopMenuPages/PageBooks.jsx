import React from 'react';
import { connect } from 'react-redux';
import BookList from '../BookComponents/BookList.jsx';
import SearchPanel from '../SearchPanel.jsx';
import BookPaginator from '../BookPaginator.jsx';
import { NotificationManager } from 'react-notifications';

import {
    receiveBooksAction,
    fetchBooksAction,
    fetchBooksSuccess,
    fetchBooksError,
    fetchBookTextRequest,
    fetchBooks,
    changeBookPage} from '../../../actions/BookActions.jsx';

class PageBooks extends React.Component {
    componentDidMount() {
        this.props.onFetchBooks(1);
    }

    render() {
        return (
            <div>
                <br/>
                <SearchPanel blankText="Найти книгу..."/>
                <br/>
                <BookPaginator
                    sortField={this.props.sortFields}
                    pageSize={this.props.pageSize}
                    pageCount={this.props.pageCount}
                    currentPage={this.props.currentPage}
                    totalResults={this.props.totalResults}
                    booksOnPage={this.props.bookList.length}
                />
                <br/>
                <BookList bookList={this.props.bookList}
                          onFetchBookText={this.props.onFetchBookText}/>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.BookListReducer.currentPage,
        pageCount: state.BookListReducer.pageCount,
        pageSize: state.BookListReducer.pageSize,
        totalResults: state.BookListReducer.totalResults,
        sortFields: state.BookListReducer.sortFields,
        sortDirections: state.BookListReducer.sortDirections,
        bookList: state.BookListReducer.list
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onFetchBooks: (currentPage) => {
            dispatch(fetchBooksAction());
            return fetchBooks(currentPage).then(([response, json]) => {
                if (response.status === 200) {
                    dispatch(fetchBooksSuccess(json));
                }
                else {
                    dispatch(fetchBooksError());
                    NotificationManager.error(response.statusText, 'Ошибка');
                }
            }).catch(error => {
                NotificationManager.error(error.message, 'Ошибка');
            })
        },
        onFetchBookText: (bookId) => {
            dispatch(fetchBookTextRequest(bookId));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageBooks);