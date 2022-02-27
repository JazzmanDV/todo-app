import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/todosStore";

const Counter = () => {
    const todos = useSelector((state: State) => state.todos);

    const todosCount = todos.filter((val) => !val.isDone).length;

    return (
        <>
            <div>Всего задач: {todos.length}</div>
            <div>Осталось выполнить: {todosCount}</div>
        </>
    );
};

export default Counter;
