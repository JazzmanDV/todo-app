import React from "react";

export default class Counter extends React.Component {
    render() {
        const todosCount = this.props.todos.filter((val) => !val.isDone).length;

        return (
            <>
                <div>Всего задач: {this.props.todos.length}</div>
                <div>Осталось выполнить: {todosCount}</div>
            </>
        );
    }
}
