import React from "react";

import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";

import todos, { Todo } from "./todos";

import styles from "./App.module.css";

export default class App extends React.Component {
    state = {
        todos: todos,
        filter: "all",
    };

    handleIsDoneChange = (index) => {
        const tempTodos = [...this.state.todos];
        tempTodos[index].isDone = !tempTodos[index].isDone;
        this.setState({ todos: tempTodos });
    };

    handleCreate = (text) => {
        const tempTodos = [...this.state.todos, new Todo(text, false)];
        this.setState({ todos: tempTodos });
    };

    handleDelete = (index) => {
        const tempTodos = [...this.state.todos];
        tempTodos.splice(index, 1);
        this.setState({ todos: tempTodos });
    };

    handleFilterChange = (filter) => {
        this.setState({ filter: filter });
    };

    render() {
        return (
            <div className={styles.app}>
                <Counter todos={this.state.todos} />
                <Input onCreate={this.handleCreate} />
                <Filter onFilterChange={this.handleFilterChange} />
                <TodoList
                    todos={this.state.todos}
                    filter={this.state.filter}
                    onIsDoneChange={this.handleIsDoneChange}
                    onDelete={this.handleDelete}
                />
            </div>
        );
    }
}
