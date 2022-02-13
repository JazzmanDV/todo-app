import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
    const todos = useSelector((state) => state.todos);

    const todosCount = todos.filter((val) => !val.isDone).length;

    return (
        <>
            <div>Всего задач: {todos.length}</div>
            <div>Осталось выполнить: {todosCount}</div>
        </>
    );
};

export default Counter;
