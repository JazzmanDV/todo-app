import React from "react";

import styles from "./TextInput.module.css";

import { ReactComponent as CreateIcon } from "./create-icon.svg";

export default class Input extends React.Component {
    textareaRef = React.createRef();

    autosize = (e) => {
        const offset = e.target.offsetHeight - e.target.clientHeight;
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + offset + "px";
    };

    handleButtonClick = (e) => {
        const textarea = this.textareaRef.current;
        const inputText = textarea.value.trim();

        textarea.value = "";
        textarea.style.height = "auto";

        if (!inputText) {
            return;
        }

        this.props.onCreate(inputText);
    };

    render() {
        return (
            <div className={styles["flex-wrapper"]}>
                <textarea
                    placeholder="Введите задачу"
                    rows="1"
                    required
                    className={styles.input}
                    ref={this.textareaRef}
                    onInput={this.autosize}
                ></textarea>
                <button onClick={this.handleButtonClick} className={`button ${styles["create-button"]}`}>
                    <CreateIcon className={styles["create-icon"]} />
                </button>
            </div>
        );
    }
}
