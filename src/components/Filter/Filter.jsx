import React from "react";

import styles from "./Filter.module.css";

const Filter = (props) => {
    return (
        <select
            value={props.filter}
            className={styles["filter-select"]}
            onChange={(e) => props.onFilterChange(e.target.value)}
        >
            <option value="all">Все</option>
            <option value="done">Выполненные</option>
            <option value="not done">Не выполненные</option>
        </select>
    );
};

export default Filter;
