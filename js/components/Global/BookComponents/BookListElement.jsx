import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import './BookListElement.css';

import {fetchBookTextRequest} from '../../../actions/BookActions.jsx';

class BookListElement extends React.Component {
    render() {
        return (
            <div className="book-list-element">
                <div className="content">
                    <div className="book-img">
                        book image
                    </div>
                    <div className="center">
                        <table>
                            <tbody>
                            <tr>
                                <td className="name">Название:</td>
                                <td className="value"><a href="#">{this.props.name}</a></td>
                            </tr>
                            <tr>
                                <td className="name">Автор:</td>
                                <td className="value"><a href="#">{this.props.author}</a></td>
                            </tr>
                            <tr>
                                <td className="name">Жанр:</td>
                                <td className="value">{this.props.genre}</td>
                            </tr>
                            <tr>
                                <td className="name">Описание:</td>
                                <td className="value">{this.props.annotation}</td>
                            </tr>
                            <tr >
                                <td className="name">Год:</td>
                                <td className="value">{this.props.lastUpdate.year}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="author-img">
                        author image
                    </div>
                </div>
                <div className="footer">
                    {/*<input className="btn-read" onClick={} type="button" value="Читать"/>*/}
                    <Link className="btn-read" onClick={this.props.onFetchBookText.bind(this, this.props.bookId)} to={'/bookviewer'}>Читать</Link>
                    <input className="btn-go-to-author" type="button" value="Перейти на страницу автора"/>
                </div>
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
        onFetchBookText: (bookId) => {
            dispatch(fetchBookTextRequest(bookId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListElement);