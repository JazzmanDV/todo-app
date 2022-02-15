import React from "react";
import { useDispatch } from "react-redux";

import styles from "./TextInput.module.css";

import { ReactComponent as AddIcon } from "./add-icon.svg";

const TextInput = () => {
    const textareaRef = React.createRef();

    const dispatch = useDispatch();

    const autosize = (e) => {
        const offset = e.target.offsetHeight - e.target.clientHeight;
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + offset + "px";
    };

    const handleButtonClick = (e) => {
        const textarea = textareaRef.current;
        const inputText = textarea.value.trim();

        textarea.value = "";
        textarea.style.height = "auto";

        if (!inputText) {
            return;
        }

        dispatch({ type: "todos/add", payload: inputText });
    };

    return (
        <div className={styles.flexWrapper}>
            <textarea
                placeholder="Введите задачу"
                rows="1"
                required
                className={styles.input}
                ref={textareaRef}
                onInput={autosize}
            ></textarea>
            <button onClick={handleButtonClick} className={`button ${styles.addButton}`}>
                <AddIcon className={styles.addIcon} />
            </button>
        </div>
    );
};

export default TextInput;
