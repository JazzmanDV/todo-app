import React from "react";
import { useDispatch } from "react-redux";

import styles from "./ResetButton.module.css";

import { ReactComponent as ResetIcon } from "./reset-icon.svg";

const TextInput = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch({ type: "todos/resetToSamples" })} className={`button ${styles.resetButton}`}>
            <ResetIcon className={styles.resetIcon} />
        </button>
    );
};

export default TextInput;
