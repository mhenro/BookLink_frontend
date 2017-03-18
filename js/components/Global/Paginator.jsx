import React from 'react';
import './Paginator.css';

class Paginator extends React.Component {
    render() {
        return (
            <div className="paginator">
                <div className="sort-panel">
                    Сортировать по:
                    <a href="#">рейтингу</a>
                    <a href="#">автору</a>
                    <a href="#">названию</a>
                    <a href="#">жанру</a>

                </div>
                <div className="page-panel">
                    Страница:
                    <a href="#">1,</a>
                    <a href="#">2,</a>
                    <a href="#">3,</a>
                    ...
                    <a href="#">100</a>
                    Элементов на странице: 10
                </div>
            </div>
        );
    }
}

export default Paginator;