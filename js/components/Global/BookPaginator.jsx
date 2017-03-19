import React from 'react';
import Paginator from './Paginator.jsx';
import Sorter from './Sorter.jsx';

class BookPaginator extends React.Component {
    render() {
        let sortFields = [
            {'likes': 'рейтингу'},
            {'book_name': 'названию'},
            {'author': 'автору'},
            {'genre': 'жанру'}
        ];  //key - the column name from the DB, value - is displayed on the site

        return (
            <div className="book-paginator">
                <Sorter
                    sortFields={sortFields}
                    currentSortField={this.props.sortField}
                />
                <Paginator
                    pageSize={this.props.pageSize}
                    pageCount={this.props.pageCount}
                    currentPage={this.props.currentPage}
                    totalResults={this.props.totalResults}
                    booksOnPage={this.props.booksOnPage}
                />
            </div>
        );
    }
}

export default BookPaginator;