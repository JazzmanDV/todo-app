import { Todo } from "../redux/todos";

export enum LocalStorageKeys {
    TODOS = "todos",
}

export const saveToLocalStorage = (key: LocalStorageKeys, data: Readonly<Todo[]>): void => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
        localStorage.removeItem(key);
    }
};

export const loadFromLocalStorage = (key: LocalStorageKeys): Todo[] | undefined => {
    try {
        const data = localStorage.getItem(key);
        if (!data) {
            return undefined;
        }
        return JSON.parse(data);
    } catch (err) {
        return undefined;
    }
};
