import React from 'react';
import { connect } from 'react-redux';
import './Paginator.css';

import {changeBookPage, fetchBooksAction, fetchBooksSuccess, fetchBooksError, fetchBooks} from '../../actions/BookActions.jsx';

class Paginator extends React.Component {
    render() {
        let pages = [];
        for (let i = 1; i <= this.props.pageCount; i++) {
            pages.push(i);
        }

        return (
            <div className="paginator">
                Страница:
                {pages.map((m) => {
                    let style = {};
                    if (m === this.props.currentPage) {
                        style = {
                            border: '1px solid gray'
                        };
                    }
                    return <a key={m} onClick={this.props.onClick.bind(this, m)} style={style} href="#">{m},</a>
                })}
                Элементов на странице: {this.props.booksOnPage} из {this.props.pageSize} (всего {this.props.totalResults})
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.BookListReducer.currentPage
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (page) => {
            dispatch(changeBookPage({
                currentPage: page
            }));
            dispatch(fetchBooksAction());
            return fetchBooks(page).then(([response, json]) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);