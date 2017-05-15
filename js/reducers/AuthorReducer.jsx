const initialState = {
    authorName: 'ФИО',
    portalName: 'Название раздела',
    birthday: '12 мая 1988г.',
    city: 'Москва',
    lastUpdate: '16 мая 2017г.',
    volume: '1123kB',
    rating: '4.72*6',
    visitors: '654789чел.'
};

const AuthorReducer = (state = initialState, action) => {
    switch(action.type) {


        default:
            return state;
    }
};

export default AuthorReducer;