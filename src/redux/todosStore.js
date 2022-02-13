import { createStore } from "redux";

import { todos, Todo } from "./todos";

function todosReducer(state = { todos: todos, filter: "all" }, action) {
    switch (action.type) {
        case "todos/add": {
            const text = action.payload;
            const tempTodos = [...state.todos, new Todo(text, false)];
            return { ...state, todos: tempTodos };
        }
        case "todos/remove": {
            const tempTodos = [...state.todos];
            const index = action.payload;
            tempTodos.splice(index, 1);
            return { ...state, todos: tempTodos };
        }
        case "todos/changeState": {
            const tempTodos = [...state.todos];
            const index = action.payload;
            tempTodos[index].isDone = !tempTodos[index].isDone;
            return { ...state, todos: tempTodos };
        }
        case "filter/changeState": {
            return { ...state, filter: action.payload };
        }
        default: {
            return state;
        }
    }
}

const todosStore = createStore(todosReducer);

export default todosStore;
