import React, { Component } from 'react';
import {Link} from 'react-router';
import './Menu.css';

const BOOKS_MENU = 'books';
const AUTHORS_MENU = 'authors';
const RATINGS_MENU = 'ratings';
const FORUMS_MENU = 'forums';
const REVIEWS_MENU = 'reviews';
const HELP_MENU = 'help';

class Menu extends Component {
    render() {
        return (
            <div>
                <ul className="menu">
                    {
                        this.props.items.map(function(m, index) {
                            let key = Object.keys(m)[0];
                            let value = Object.values(m)[0];
                            let style = {};
                            if (value.toLowerCase() == HELP_MENU.toLowerCase()) {
                                style = {float: 'right'};
                            }
                            return <li key={value} style={style}>
                                <Link activeClassName="active" to={'/' + value}>{key}</Link>
                            </li>;
                        }.bind(this))
                    }
                </ul>
            </div>  
        );
    }
}

export default Menu;