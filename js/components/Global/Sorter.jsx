import React from 'react';
import './Sorter.css';

class Sorter extends React.Component {
    doSort() {
        console.log(this);
    }

    render() {
        return (
            <div className="sorter">
                Сортировать по:
                {this.props.sortFields.map((m) => {
                    return <a key={Object.keys(m)[0]} onClick={this.doSort.bind(Object.keys(m)[0])} href="#">{Object.values(m)[0]}</a>
                })}
            </div>
        );
    }
}

export default Sorter;