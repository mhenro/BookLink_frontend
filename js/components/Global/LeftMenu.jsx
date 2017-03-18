import React from 'react';
import {Link} from 'react-router';
import './LeftMenu.css';

export default class LeftMenu extends React.Component{
    render() {
        return (
            <div>
                <ul className="left-menu">
                    <li><Link to="/me">Моя страница</Link></li>
                    <li><Link to="/news">Новости</Link></li>
                    <li><Link to="/messages">Сообщения</Link></li>
                    <li><Link to="/friends">Друзья</Link></li>
                    <li><Link to="/groups">Группы</Link></li>
                </ul>
            </div>
        );
    }
}