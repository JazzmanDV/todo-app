import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Filter.module.css";

const Filter = () => {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    return (
        <select
            value={filter}
            className={styles.filterSelect}
            onChange={(e) => dispatch({ type: "filter/set", payload: e.target.value })}
        >
            <option value="all">Все</option>
            <option value="done">Выполненные</option>
            <option value="not done">Не выполненные</option>
        </select>
    );
};

export default Filter;
