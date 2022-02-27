import { createStore, combineReducers } from "redux";
import debounce from "lodash/debounce";

import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

import { Todo } from "./todos";
import { todosSamples } from "./todosSamples";

import { saveToLocalStorage, loadFromLocalStorage, LocalStorageKeys } from "../utils/localStorage";

let initialTodosArray: Readonly<Todo[] | undefined> = [...todosSamples];

if (!localStorage.getItem(LocalStorageKeys.TODOS)) {
    saveToLocalStorage(LocalStorageKeys.TODOS, initialTodosArray);
} else {
    initialTodosArray = loadFromLocalStorage(LocalStorageKeys.TODOS);
}

const reducers = combineReducers({ todos: todosReducer, filter: filterReducer });

const todosStore = createStore(reducers, { todos: initialTodosArray });

todosStore.subscribe(
    debounce(() => saveToLocalStorage(LocalStorageKeys.TODOS, todosStore.getState().todos), 500, {
        leading: true,
        trailing: true,
        maxWait: 1000,
    })
);

export type State = ReturnType<typeof reducers>;
export default todosStore;
