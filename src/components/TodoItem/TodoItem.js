import React from "react";

import styles from "./TodoItem.module.css";

import { ReactComponent as DeleteIcon } from "./delete-icon.svg";

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

        const spanClassNames = [
            styles.text,
            todo.isDone ? styles.done : "",
        ].join(" ");

        return (
            <li ref={this.listItemRef} className={styles["list-item"]}>
                <label className={styles["list-item__inner"]}>
                    <input
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={this.handleCheckboxChange}
                        className={styles.checkbox}
                    ></input>
                    <span className={spanClassNames}>{todo.text}</span>
                    <button
                        onClick={this.handleButtonClick}
                        className={styles["delete-button"]}
                    >
                        <DeleteIcon className={styles["delete-icon"]} />
                    </button>
                </label>
            </li>
        );
    }
}
