import { createStore, combineReducers } from "redux";
import debounce from "lodash/debounce";

import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

import { todosSamples } from "./todosSamples";

import { saveToLocalStorage, loadFromLocalStorage } from "../utils/localStorage";

const TODOS_KEY = "todos";

let initialTodosArray = [...todosSamples];

if (!localStorage.getItem(TODOS_KEY)) {
    saveToLocalStorage(TODOS_KEY, initialTodosArray);
} else {
    initialTodosArray = loadFromLocalStorage(TODOS_KEY);
}

const reducers = combineReducers({ todos: todosReducer, filter: filterReducer });

const todosStore = createStore(reducers, { todos: initialTodosArray });

todosStore.subscribe(
    debounce(() => saveToLocalStorage(TODOS_KEY, todosStore.getState().todos), 500, {
        leading: true,
        trailing: true,
        maxWait: 1000,
    })
);

export default todosStore;
