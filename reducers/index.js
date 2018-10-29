const initialState = {
    fetched: false,
    weather: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_WEATHER":
            return Object.assign({}, state, {
                fetched: true,
                weather: { ...action.data }
            });
        default:
            return state;
    }
};

export default reducer;