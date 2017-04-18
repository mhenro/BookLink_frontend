import React from 'react';

export default class Me extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        fetch("http://localhost:8080/booklink/BookController/getJson", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.token
            }
        })
            .then(response => Promise.all([response, response.json()]))
            .catch(error => {
                alert(error);
            });
    }

    render() {
        return (
            <div>
                {this.props.registered ?
                    <div>
                        <h1>My page</h1>
                    </div>
                    :
                    <div>
                        Пожалуйста, войдите в систему, чтобы получить доступ к этой странице
                    </div>
                }

                <button type="button" onClick={this.onClick}>check secured</button>
            </div>
        )
    }
}