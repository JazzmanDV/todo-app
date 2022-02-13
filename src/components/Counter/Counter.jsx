import React from "react";

const Counter = (props) => {
    const todosCount = props.todos.filter((val) => !val.isDone).length;

    return (
        <>
            <div>Всего задач: {props.todos.length}</div>
            <div>Осталось выполнить: {todosCount}</div>
        </>
    );
};

export default Counter;
