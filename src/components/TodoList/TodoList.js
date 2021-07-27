import React from "react";

import TodoItem from "../TodoItem/TodoItem";

import "./TodoList.css";

export default class TodoList extends React.Component {
    render() {
        const todoList = this.props.todos.map((todo, index) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                index={index}
                onIsDoneChange={this.props.onIsDoneChange}
                onDelete={this.props.onDelete}
            />
        ));

        return <ul>{todoList}</ul>;
    }
}
