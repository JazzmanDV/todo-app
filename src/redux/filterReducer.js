export const filterReducer = (state = "all", action) => {
    switch (action.type) {
        case "filter/set": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
