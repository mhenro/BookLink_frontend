import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {

    render () {
        return (
            <div>
                <input className="search-panel" type="text" name="search" placeholder={this.props.blankText} />
            </div>
        );
    }
}