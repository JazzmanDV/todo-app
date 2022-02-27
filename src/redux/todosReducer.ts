import {Todo} from "./todos";
import {todosSamples} from "./todosSamples";

export enum TodosActionTypes {
    ADD = "todos/add",
    REMOVE = "todos/remove",
    TOGGLE = "todos/toggle",
    RESET_TO_SAMPLES = "todos/resetToSamples",
}

type TodosAction = {
    type: TodosActionTypes;
    payload: string;
};

type TodosState = Readonly<Todo[]>;

export const todosReducer = (state: TodosState = [], action: TodosAction) => {
    switch (action.type) {
        case TodosActionTypes.ADD: {
            return [...state, new Todo(action.payload, false)];
        }
        case TodosActionTypes.REMOVE: {
            return state.filter((todo) => todo.id !== action.payload);
        }
        case TodosActionTypes.TOGGLE: {
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }

                return {...todo, isDone: !todo.isDone};
            });
        }
        case TodosActionTypes.RESET_TO_SAMPLES: {
            return [...todosSamples];
        }
        default: {
            return state;
        }
    }
};
