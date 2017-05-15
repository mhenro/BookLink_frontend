import React from 'react';
import './AuthorDashboard.css';

export default class AuthorDashboard extends React.Component {
    render() {
        return (
            <div className="author-dashboard">
                <div className="item">
                    <div>34</div>
                    <div>общих друга</div>
                </div>
                <div className="item">
                    <div>34</div>
                    <div>друга</div>
                </div>
                <div className="item">
                    <div>324</div>
                    <div>подписчиков</div>
                </div>
                <div className="item">
                    <div>12</div>
                    <div>книг</div>
                </div>
                <div className="item">
                    <div>134</div>
                    <div>оценок</div>
                </div>
                <div className="clear-fix"></div>
            </div>
        )
    }
}