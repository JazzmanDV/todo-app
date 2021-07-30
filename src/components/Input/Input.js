import React from "react";

import styles from "./Input.module.css";

import { ReactComponent as CreateIcon } from "./create-icon.svg";

export default class Input extends React.Component {
    textareaRef = React.createRef();

    componentDidMount() {
        const textarea = this.textareaRef.current;

        const offset = textarea.offsetHeight - textarea.clientHeight;

        textarea.addEventListener("input", (e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + offset + "px";
        });
    }

    handleButtonClick = (e) => {
        const inputText = this.textareaRef.current.value.trim();

        this.textareaRef.current.value = "";

        if (!inputText) {
            return;
        }

        this.props.onCreate(inputText);
    };

    render() {
        return (
            <div className={styles["flex-wrapper"]}>
                <textarea
                    ref={this.textareaRef}
                    placeholder="Введите задачу"
                    rows="1"
                    required
                    className={styles.input}
                ></textarea>
                <button
                    onClick={this.handleButtonClick}
                    className={styles["create-button"]}
                >
                    <CreateIcon className={styles["create-icon"]} />
                </button>
            </div>
        );
    }
}
