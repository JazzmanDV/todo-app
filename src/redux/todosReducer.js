import { Todo, todosSamples } from "./todosSamples";

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case "todos/add": {
            const newTodos = [...state, new Todo(action.payload, false)];
            return newTodos;
        }
        case "todos/remove": {
            const newTodos = state.filter((todo) => todo.id !== action.payload);
            return newTodos;
        }
        case "todos/toggle": {
            const newTodos = state.map((todo, index) => {
                if (todo.id !== action.payload) {
                    return todo;
                }

                return { ...todo, isDone: !todo.isDone };
            });
            return newTodos;
        }
        case "todos/resetToSamples": {
            const newTodos = [...todosSamples];
            return newTodos;
        }
        default: {
            return state;
        }
    }
};
