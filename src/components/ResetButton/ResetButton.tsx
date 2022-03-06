import React, { FC } from "react";
import { useDispatch } from "react-redux";

import styles from "./ResetButton.module.css";

import { ReactComponent as ResetIcon } from "./reset-icon.svg";
import { TodosActionTypes } from "../../redux/todosReducer";

const ResetButton: FC = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch({ type: TodosActionTypes.RESET_TO_SAMPLES })} className={`button ${styles.resetButton}`}>
            <ResetIcon className={styles.resetIcon} />
        </button>
    );
};

export default ResetButton;
