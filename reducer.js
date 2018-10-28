const initialState = {
    fetching: false,
    weather: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_WEATHER":
            return Object.assign({}, state, {
                fetching: true,
            });
        case "RECEIVE_WEATHER":
            return Object.assign({}, state, {
                fetching: false,
                weather: action.data,
            });
        default:
            return state;
    }
};

export default reducer;