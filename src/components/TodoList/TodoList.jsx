import React from "react";

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

export default class TodoList extends React.Component {
    render() {
        const todos = this.props.todos;
        const filter = this.props.filter;

        const todoList = todos.map((todo, index) => {
            let visible = false;
            if (filter === "all") {
                visible = true;
            }
            if (filter === "done" && todo.isDone) {
                visible = true;
            }
            if (filter === "not done" && !todo.isDone) {
                visible = true;
            }
            return (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    visible={visible}
                    onIsDoneChange={this.props.onIsDoneChange}
                    onDelete={this.props.onDelete}
                />
            );
        });

        return (
            <div className={styles["todo-list"]}>
                <ul className={styles.list}>{todoList}</ul>
            </div>
        );
    }
}
