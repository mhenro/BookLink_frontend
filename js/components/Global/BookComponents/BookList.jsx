import React from 'react';
import BookListElement from './BookListElement.jsx';

class BookList extends React.Component {
    render() {
        return (
            <div id="book-list">
                {
                    this.props.bookList.books.list.map(book =>
                        <BookListElement
                            key={book.bookId}
                            {...book}
                        />
                    )
                }
            </div>
        );
    }
}

export default BookList;