import React from "react";

import styles from "./TextInput.module.css";

import { ReactComponent as CreateIcon } from "./create-icon.svg";

const TextInput = (props) => {
    const textareaRef = React.createRef();

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

        props.onCreate(inputText);
    };

    return (
        <div className={styles["flex-wrapper"]}>
            <textarea
                placeholder="Введите задачу"
                rows="1"
                required
                className={styles.input}
                ref={textareaRef}
                onInput={autosize}
            ></textarea>
            <button onClick={handleButtonClick} className={`button ${styles["create-button"]}`}>
                <CreateIcon className={styles["create-icon"]} />
            </button>
        </div>
    );
};

export default TextInput;
