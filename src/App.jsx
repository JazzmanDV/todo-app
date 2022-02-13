import React, { useState } from "react";

import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";

import { todosArray, Todo } from "./todos";

import "./App.css";

const App = (props) => {
    const [todos, setTodos] = useState(todosArray);
    const [filter, setFilter] = useState("all");

    const handleIsDoneChange = (index) => {
        const tempTodos = [...todos];
        tempTodos[index].isDone = !tempTodos[index].isDone;
        setTodos(tempTodos);
    };

    const handleCreate = (text) => {
        const tempTodos = [...todos, new Todo(text, false)];
        setTodos(tempTodos);
    };

    const handleDelete = (index) => {
        const tempTodos = [...todos];
        tempTodos.splice(index, 1);
        setTodos(tempTodos);
    };

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    return (
        <div className={"app"}>
            <Counter todos={todos} />
            <TextInput onCreate={handleCreate} />
            <Filter onFilterChange={handleFilterChange} />
            <TodoList todos={todos} filter={filter} onIsDoneChange={handleIsDoneChange} onDelete={handleDelete} />
        </div>
    );
};

export default App;
