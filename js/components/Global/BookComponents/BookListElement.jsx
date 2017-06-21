import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import './BookListElement.css';

import {fetchBookTextRequest} from '../../../actions/BookActions.jsx';

export default class BookListElement extends React.Component {
    constructor(props) {
        super(props);

        this.onReadButtonClick = this.onReadButtonClick.bind(this);
    }

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
                    {this.renderDeleteButton()}
                    {this.renderEditButton()}
                    <Link className="btn-read" onClick={this.onReadButtonClick} to={'/bookviewer'}>Читать</Link>
                    <input className="btn-go-to-author" type="button" value="Перейти на страницу автора"/>
                </div>
            </div>
        );
    }

    renderDeleteButton() {
        //TODO: check for owner
        return (
            <input className="btn-go-to-author" type="button" value="Удалить"/>
        )
    }

    renderEditButton() {
        //TODO: check for owner
        return (
            <input className="btn-go-to-author" type="button" value="Редактировать"/>
        )
    }

    onReadButtonClick() {
        this.props.onFetchBookText(this.props.bookId);
    }
};