import React from "react";

import styles from "./TodoItem.module.css";

import { ReactComponent as DeleteIcon } from "./delete-icon.svg";

export default class TodoItem extends React.Component {
    willBeDeleted = false;

    listItemRef = React.createRef();

    state = {
        visible: true,
    };

    show = () => {
        const listItem = this.listItemRef.current;

        const listItemHeight = getComputedStyle(listItem).height;

        listItem.style.height = 0;
        requestAnimationFrame(() => {
            listItem.style.height = listItemHeight;
        });
    };

    hide = (deleteAfterHide = false) => {
        const listItem = this.listItemRef.current;

        listItem.style.border = 0;
        listItem.style.height = getComputedStyle(listItem).height;
        requestAnimationFrame(() => {
            listItem.style.height = 0;
        });

        if (deleteAfterHide) {
            listItem.addEventListener("transitionend", this.handleTransitionEnd);
        }
    };

    handleCheckboxChange = (e) => {
        this.props.onIsDoneChange(this.props.index);
    };

    handleTransitionEnd = (e) => {
        if (e.propertyName === "height") {
            this.props.onDelete(this.props.index);
        }
    };

    handleButtonClick = (e) => {
        if (this.willBeDeleted) {
            return;
        }

        this.willBeDeleted = true;

        this.hide(true);
    };

    componentDidMount() {
        if (this.props.visible) {
            this.show();
        }
        if (!this.props.visible) {
            this.setState({ visible: false });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.visible !== this.props.visible) {
            if (this.props.visible) {
                this.setState({ visible: true }, () => this.show());
            }
            if (!this.props.visible) {
                this.hide();
                this.listItemRef.current.addEventListener("transitionend", () => this.setState({ visible: false }));
            }
        }
    }

    componentWillUnmount() {
        this.listItemRef.current.removeEventListener("transitionend", this.handleTransitionEnd);
    }

    render() {
        const todo = this.props.todo;

        const spanClassNames = [styles.text, todo.isDone ? styles.done : ""].join(" ");

        return this.state.visible ? (
            <li ref={this.listItemRef} className={styles["list-item"]}>
                <label className={styles["list-item__inner"]}>
                    <input
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={this.handleCheckboxChange}
                        className={styles.checkbox}
                    ></input>
                    <span className={spanClassNames}>{todo.text}</span>
                    <button onClick={this.handleButtonClick} className={styles["delete-button"]}>
                        <DeleteIcon className={styles["delete-icon"]} />
                    </button>
                </label>
            </li>
        ) : null;
    }
}
