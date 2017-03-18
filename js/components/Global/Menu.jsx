import React, { Component } from 'react';
import {Link} from 'react-router';
import './Menu.css';

const HELP_MENU = 'help';

export default class Menu extends Component {
    render() {
        var self = this;
        return (
            <div>
                <ul className="menu">
                    {
                        this.props.items.map(function(m, index) {
                            var style = {};
                            if (Object.values(m)[0].toLowerCase() == HELP_MENU.toLowerCase()) {
                                style = {float: 'right'};
                            }
                            return <li key={Object.values(m)[0]} style={style}>
                                <Link activeClassName="active" to={'/' + Object.values(m)[0]}>{Object.keys(m)[0]}</Link>
                            </li>;
                        })
                    }
                </ul>
            </div>  
        );
    }
}