import React from 'react';

export default class AuthorInfo extends React.Component {
    render() {
        return (
            <div className="author-info">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                День рождения:
                            </th>
                            <th>
                                {this.props.birthday}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Город:
                            </th>
                            <th>
                                {this.props.city}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Последнее обновление:
                            </th>
                            <th>
                                {this.props.lastUpdate}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Объем:
                            </th>
                            <th>
                                {this.props.volume}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Рейтинг:
                            </th>
                            <th>
                                {this.props.rating}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Посетители:
                            </th>
                            <th>
                                {this.props.visitors}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}