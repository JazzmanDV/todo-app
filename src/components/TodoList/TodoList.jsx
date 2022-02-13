import React from "react";

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = (props) => {
    const todos = props.todos;
    const filter = props.filter;

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
                onIsDoneChange={props.onIsDoneChange}
                onDelete={props.onDelete}
            />
        );
    });

    return (
        <div className={styles["todo-list"]}>
            <ul className={styles.list}>{todoList}</ul>
        </div>
    );
};

export default TodoList;
