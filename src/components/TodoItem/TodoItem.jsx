import React, { useState, createRef, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./TodoItem.module.css";

import { ReactComponent as DeleteIcon } from "./delete-icon.svg";

const TodoItem = (props) => {
    const todo = useSelector((state) => state.todos[props.index]);
    const dispatch = useDispatch();

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
            addTransitionEndListener(listItem, "height", () =>
                dispatch({ type: "todos/remove", payload: props.index })
            );
        }
    };

    const handleCheckboxChange = (e) => {
        dispatch({ type: "todos/changeState", payload: props.index });
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

    const spanClassNames = [styles.text, todo.isDone ? styles.done : ""].join(" ");

    return visible ? (
        <li ref={listItemRef} className={styles.listItem}>
            <label className={styles.listItem__inner}>
                <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={handleCheckboxChange}
                    className={styles.checkbox}
                ></input>
                <span className={spanClassNames}>{todo.text}</span>
                <button onClick={handleDeleteButtonClick} className={`button ${styles.deleteButton}`}>
                    <DeleteIcon className={styles.deleteIcon} />
                </button>
            </label>
        </li>
    ) : null;
};

export default TodoItem;
