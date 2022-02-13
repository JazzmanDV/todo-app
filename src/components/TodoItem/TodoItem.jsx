import React, { useState, createRef, useEffect, useLayoutEffect } from "react";

import styles from "./TodoItem.module.css";

import { ReactComponent as DeleteIcon } from "./delete-icon.svg";

const TodoItem = (props) => {
    let willBeDeleted = false;

    const listItemRef = createRef();
    const [visible, setVisible] = useState(props.visible);

    const show = () => {
        const listItem = listItemRef.current;

        const listItemHeight = getComputedStyle(listItem).height;

        listItem.style.height = 0;
        requestAnimationFrame(() => {
            listItem.style.height = listItemHeight;
        });
    };

    const hide = (deleteAfterHide = false) => {
        const listItem = listItemRef.current;

        listItem.style.border = 0;
        listItem.style.height = getComputedStyle(listItem).height;
        requestAnimationFrame(() => {
            listItem.style.height = 0;
        });

        if (deleteAfterHide) {
            addTransitionEndListener(listItem, "height", () => props.onDelete(props.index));
        }
    };

    const handleCheckboxChange = (e) => {
        props.onIsDoneChange(props.index);
    };

    const addTransitionEndListener = (target, property, callback) => {
        const eventListenerCallback = (e) => {
            if (e.propertyName === property) {
                callback();
                e.target.removeEventListener("transitionend", eventListenerCallback);
            }
        };
        target.addEventListener("transitionend", eventListenerCallback);
    };

    const handleDeleteButtonClick = (e) => {
        if (willBeDeleted) {
            return;
        }

        willBeDeleted = true;

        hide(true);
    };

    useEffect(() => {
        if (!visible && props.visible) {
            setVisible(true);
        }
        if (visible && !props.visible) {
            hide();
            addTransitionEndListener(listItemRef.current, "height", () => setVisible(false));
        }
    }, [props.visible]);

    useLayoutEffect(() => {
        if (visible) {
            show();
        }
    }, [visible]);

    const todo = props.todo;
    const spanClassNames = [styles.text, todo.isDone ? styles.done : ""].join(" ");

    return visible ? (
        <li ref={listItemRef} className={styles["list-item"]}>
            <label className={styles["list-item__inner"]}>
                <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={handleCheckboxChange}
                    className={styles.checkbox}
                ></input>
                <span className={spanClassNames}>{todo.text}</span>
                <button onClick={handleDeleteButtonClick} className={`button ${styles["delete-button"]}`}>
                    <DeleteIcon className={styles["delete-icon"]} />
                </button>
            </label>
        </li>
    ) : null;
};

export default TodoItem;
