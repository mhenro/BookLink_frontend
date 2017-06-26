import {
    FETCH_AUTHOR_DETAILS_SUCCESS,
    FETCH_AUTHOR_DETAILS_ERROR
} from '../actions/AuthorActions.jsx';

import {
    dateToString
} from '../DateUtils';

const initialState = {
    authorName: 'ФИО',
    portalName: 'Название раздела',
    birthday: '12 мая 1988г.',
    city: 'Москва',
    lastUpdate: '16 мая 2017г.',
    volume: '1123kB',
    rating: '4.72*6',
    visitors: '654789чел.',

    authorBooks: []
};

const AuthorReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_AUTHOR_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                authorName: action.payload.name + ' ' + action.payload.surname,
                portalName: action.payload.portalName,
                birthday: dateToString(new Date(action.payload.birthday.year, action.payload.birthday.monthValue - 1, action.payload.birthday.dayOfMonth)),
                city: action.payload.city
            });

        case FETCH_AUTHOR_DETAILS_ERROR:
            return state;

        default:
            return state;
    }
};

export default AuthorReducer;