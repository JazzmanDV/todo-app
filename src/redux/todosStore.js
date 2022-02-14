import { createStore, combineReducers } from "redux";

import { todos, Todo } from "./todos";

const filterReducer = (state = "all", action) => {
    switch (action.type) {
        case "filter/set": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

const todosReducer = (state = todos, action) => {
    switch (action.type) {
        case "todos/add": {
            return [...state, new Todo(action.payload, false)];
        }
        case "todos/remove": {
            const tempTodos = [...state];
            const index = action.payload;
            tempTodos.splice(index, 1);
            return tempTodos;
        }
        case "todos/toggle": {
            const tempTodos = [...state];
            const index = action.payload;
            tempTodos[index].isDone = !tempTodos[index].isDone;
            return tempTodos;
        }
        default: {
            return state;
        }
    }
};

const todosStore = createStore(combineReducers({ todos: todosReducer, filter: filterReducer }));

export default todosStore;
