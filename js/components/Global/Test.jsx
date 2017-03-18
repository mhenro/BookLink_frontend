import React, { Component } from 'react';

export default class Test extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/booklink/BookController/getJson')
		.then(response => response.json())
		.then(json => {
			console.log(json.data);
			this.setState({
				items: json.data
			});
		})
    }
    
    render() {        
        return (
            <div>
                <div>Items:</div>
		<br />
                { this.state.items.map(item=> { return <div>{item}</div>}) } 
            </div>  
        );
    }
}