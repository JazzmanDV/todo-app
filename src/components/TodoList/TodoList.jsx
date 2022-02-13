import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.filter);

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
        return <TodoItem key={todo.id} index={index} visible={visible} />;
    });

    return (
        <div className={styles["todo-list"]}>
            <ul className={styles.list}>{todoList}</ul>
        </div>
    );
};

export default TodoList;
