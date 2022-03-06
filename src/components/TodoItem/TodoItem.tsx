import React, { useRef, useState, useEffect, useLayoutEffect, TransitionEvent, FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./TodoItem.module.css";

import { ReactComponent as RemoveIcon } from "./remove-icon.svg";

import { State } from "../../redux/todosStore";
import { TodosActionTypes } from "../../redux/todosReducer";

interface TodoItemProps {
    index: number;
    visible: boolean;
};

const TodoItem: FC<TodoItemProps> = (props) => {
    const todo = useSelector((state: State) => state.todos[props.index]);
    const dispatch = useDispatch();

    let willBeDeleted = false;

    const listItemRef = useRef<HTMLLIElement>(null);
    const [visible, setVisible] = useState(props.visible);

    const show = () => {
        const listItem = listItemRef.current;

        if (!listItem) {
            return;
        }

        const listItemHeight = getComputedStyle(listItem).height;

        requestAnimationFrame(() => {
            listItem.style.height = "0";
            requestAnimationFrame(() => {
                listItem.style.height = listItemHeight;
            });
        });
    };

    const hide = (deleteAfterHide = false) => {
        const listItem = listItemRef.current;

        if (!listItem) {
            return;
        }

        listItem.style.border = "0";
        listItem.style.height = getComputedStyle(listItem).height;
        requestAnimationFrame(() => {
            listItem.style.height = "0";
        });

        if (deleteAfterHide) {
            addTransitionEndListener(listItem, "height", () => dispatch({ type: TodosActionTypes.REMOVE, payload: todo.id }));
        }
    };

    const handleCheckboxChange = () => {
        dispatch({ type: TodosActionTypes.TOGGLE, payload: todo.id });
    };

    const addTransitionEndListener = (target: HTMLLIElement, property: string, callback: () => void) => {
        const eventListenerCallback = (e: TransitionEvent<typeof target>) => {
            if (e.propertyName === property) {
                callback();
                e.target.removeEventListener("transitionend", eventListenerCallback as unknown as EventListener);
            }
        };
        target.addEventListener("transitionend", eventListenerCallback as unknown as EventListener);
    };

    const handleDeleteButtonClick = () => {
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
            if (!listItemRef.current) {
                return;
            }
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
                <button onClick={handleDeleteButtonClick} className={`button ${styles.removeButton}`}>
                    <RemoveIcon className={styles.removeIcon} />
                </button>
            </label>
        </li>
    ) : null;
};

export default TodoItem;
