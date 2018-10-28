const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "rock":
            return Object.assign({}, state, {
                rock: action.rock,
            });
        default:
            return state
    }
};

export default reducer;