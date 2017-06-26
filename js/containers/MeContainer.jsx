import React from 'react';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import './MeContainer.css';

import AuthorInfo from '../components/Global/author/AuthorInfo.jsx';
import AuthorDashboard from '../components/Global/author/AuthorDashboard.jsx';
import BookList from '../components/Global/BookComponents/BookList.jsx';

import {
    fetchBooks,
    fetchAuthorDetails,
    fetchAuthorDetailsSuccess,
    fetchAuthorDetailsError
} from '../actions/AuthorActions.jsx';

import {
    fetchBooksSuccess,
    fetchBooksError,
    fetchBookTextRequest
} from '../actions/BookActions.jsx';

class MeContainer extends React.Component {
    componentDidMount() {
        this.props.onFetchAuthorDetails(this.props.login);
        this.props.onFetchBooks(this.props.login, 1);
    }

    render() {
        if (!this.props.registered) {
            return (
                <div>
                    Пожалуйста, войдите в систему, чтобы получить доступ к этой странице
                </div>
            );
        }

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
                    <div className="clear-fix"></div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {/*<BookPaginator
                        sortField={this.props.sortFields}
                        pageSize={this.props.pageSize}
                        pageCount={this.props.pageCount}
                        currentPage={this.props.currentPage}
                        totalResults={this.props.totalResults}
                        booksOnPage={this.props.bookList.length}
                    />*/}
                    <br/>
                    <BookList owner={true}
                              bookList={this.props.bookList}
                              onFetchBookText={this.props.onFetchBookText}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registered: state.GlobalReducer.registered,
        token: state.GlobalReducer.token,
        login: state.GlobalReducer.user.login,
        authorName: state.AuthorReducer.authorName,
        portalName: state.AuthorReducer.portalName,
        birthday: state.AuthorReducer.birthday,
        city: state.AuthorReducer.city,
        lastUpdate: state.AuthorReducer.lastUpdate,
        volume: state.AuthorReducer.volume,
        rating: state.AuthorReducer.rating,
        visitors: state.AuthorReducer.visitors,

        currentPage: state.BookListReducer.currentPage,
        pageCount: state.BookListReducer.pageCount,
        pageSize: state.BookListReducer.pageSize,
        totalResults: state.BookListReducer.totalResults,
        sortFields: state.BookListReducer.sortFields,
        sortDirections: state.BookListReducer.sortDirections,
        bookList: state.BookListReducer.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchAuthorDetails: (login) => {
            return fetchAuthorDetails(login).then(([response, json]) => {
                if (response.status === 200) {
                    if (json.error) {
                        NotificationManager.error(json.error.message, 'Ошибка');
                        return;
                    }
                    dispatch(fetchAuthorDetailsSuccess(json));
                }
                else {
                    dispatch(fetchAuthorDetailsError());
                    NotificationManager.error(response.statusText, 'Ошибка');
                }
            }).catch(error => {
                NotificationManager.error(error.message, 'Ошибка');
            })
        },
        onFetchBooks: (login, currentPage) => {
            return fetchBooks(login, currentPage).then(([response, json]) => {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MeContainer);