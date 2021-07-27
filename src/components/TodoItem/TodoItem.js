import React from "react";

import "./TodoItem.css";

export default class TodoItem extends React.Component {
    listItemRef = React.createRef();
    willBeDeleted = false;

    handleCheckboxChange = (e) => {
        this.props.onIsDoneChange(this.props.index);
    };

    handleButtonClick = (e) => {
        if (this.willBeDeleted) {
            return;
        }
        this.willBeDeleted = true;

        const listItem = this.listItemRef.current;
        const listItemStyle = getComputedStyle(listItem);

        const listItemHeight = listItemStyle.height;

        requestAnimationFrame(() => {
            listItem.style.height = listItemHeight;
            listItem.style.border = 0;

            requestAnimationFrame(() => {
                listItem.style.height = 0;
            });
        });

        const timeoutDuration =
            parseFloat(listItemStyle.transitionDuration.slice(0, -1)) * 1000;

        setTimeout(() => {
            this.props.onDelete(this.props.index);
        }, timeoutDuration);
    };

    render() {
        const todo = this.props.todo;
        const classes = todo.isDone ? "done" : "";

        return (
            <li ref={this.listItemRef}>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={this.handleCheckboxChange}
                    ></input>
                    <span className={classes}>{todo.text}</span>
                    <button onClick={this.handleButtonClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 24 24"
                        >
                            <path d="M 1.789062 -0.191406 L -0.191406 1.789062 L 10.019531 12 L -0.191406 22.210938 L 1.789062 24.191406 L 12 13.980469 L 22.210938 24.191406 L 24.191406 22.210938 L 13.980469 12 L 24.191406 1.789062 L 22.210938 -0.191406 L 12 10.019531 Z M 1.789062 -0.191406 " />
                        </svg>
                    </button>
                </label>
            </li>
        );
    }
}
