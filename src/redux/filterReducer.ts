export enum FilterActionTypes {
    SET = "filter/set",
}

type Filter = "all" | "done" | "not done";

type FilterAction = {
    type: FilterActionTypes;
    payload: Filter;
};

type FilterState = Filter;

export const filterReducer = (state: FilterState = "all", action: FilterAction) => {
    switch (action.type) {
        case FilterActionTypes.SET: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
