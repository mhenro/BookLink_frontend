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
                            {this.renderAuthorName()}
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
                    {this.renderAuthorAvatar()}
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

    renderAuthorName() {
        if (!this.props.owner) {
            return (
                <tr>
                    <td className="name">Автор:</td>
                    <td className="value"><a href="#">{this.props.author.name + ' ' + this.props.author.surname}</a></td>
                </tr>
            )
        }
        return null;
    }

    renderAuthorAvatar() {
        if (!this.props.owner) {
            return (
                <div className="author-img">
                    author image
                </div>
            )
        }
        return null;
    }

    renderDeleteButton() {
        if (this.props.owner) {
            return (
                <input className="btn-go-to-author" type="button" value="Удалить"/>
            )
        }
        return null;
    }

    renderEditButton() {
        if (this.props.owner) {
            return (
                <input className="btn-go-to-author" type="button" value="Редактировать"/>
            )
        }
        return null;
    }

    onReadButtonClick() {
        this.props.onFetchBookText(this.props.bookId);
    }
};