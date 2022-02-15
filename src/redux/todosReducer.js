import { Todo, todosSamples } from "./todosSamples";
import { saveToLocalStorage, loadFromLocalStorage } from "../utils/localStorage";

const TODOS_KEY = "todos";

let initialTodos = [...todosSamples];

if (!localStorage.getItem(TODOS_KEY)) {
    saveToLocalStorage(TODOS_KEY, initialTodos);
} else {
    initialTodos = loadFromLocalStorage(TODOS_KEY);
}

export const todosReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case "todos/add": {
            const newTodos = [...state, new Todo(action.payload, false)];
            saveToLocalStorage(TODOS_KEY, newTodos);
            return newTodos;
        }
        case "todos/remove": {
            const newTodos = [...state];
            const index = action.payload;
            newTodos.splice(index, 1);
            saveToLocalStorage(TODOS_KEY, newTodos);
            return newTodos;
        }
        case "todos/toggle": {
            const newTodos = [...state];
            const index = action.payload;
            newTodos[index].isDone = !newTodos[index].isDone;
            saveToLocalStorage(TODOS_KEY, newTodos);
            return newTodos;
        }
        // case "todos/resetToSamples": {
        //     const newTodos = [...todosSamples];
        //     saveToLocalStorage(TODOS_KEY, newTodos);
        //     return newTodos;
        // }
        default: {
            return state;
        }
    }
};
