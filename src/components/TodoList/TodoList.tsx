import React, { FC } from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/todosStore";

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList: FC = () => {
    const todos = useSelector((state: State) => state.todos);
    const filter = useSelector((state: State) => state.filter);

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
        <div className={styles.todoList}>
            <ul className={styles.list}>{todoList}</ul>
        </div>
    );
};

export default TodoList;
