import { createStore, combineReducers } from "redux";

import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

const todosStore = createStore(combineReducers({ todos: todosReducer, filter: filterReducer }));

export default todosStore;
