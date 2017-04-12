const initialState = {
    registered: false,
    user: {
        login: 'TestUser'
    }
};

const GlobalReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default GlobalReducer;