import React from 'react';
import BookListElement from './BookListElement.jsx';

export default class BookList extends React.Component {
    render() {
        return (
            <div id="book-list">
                {
                    this.props.bookList.map(book =>
                        <BookListElement
                            key={book.bookId}
                            bookId={book.bookId}
                            onFetchBookText={this.props.onFetchBookText}
                            {...book}
                        />
                    )
                }
            </div>
        );
    }
};