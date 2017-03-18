import React from 'react';
import './BookListElement.css';

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
                    <input className="btn-read" type="button" value="Читать"/>
                    <input className="btn-go-to-author" type="button" value="Перейти на страницу автора"/>
                </div>
            </div>
        );
    }
}

export default BookListElement;