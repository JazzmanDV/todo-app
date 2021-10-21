import React from "react";

import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";

import todos, { Todo } from "./todos";

import styles from "./App.module.css";

export default class App extends React.Component {
    state = {
        todos: todos,
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

    render() {
        const todosCount = this.state.todos.filter((val) => !val.isDone).length;

        return (
            <div className={styles.app}>
                <Counter todosCount={todosCount} />
                <Input onCreate={this.handleCreate} />
                <TodoList
                    todos={this.state.todos}
                    onIsDoneChange={this.handleIsDoneChange}
                    onDelete={this.handleDelete}
                />
            </div>
        );
    }
}
