import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterActionTypes } from "../../redux/filterReducer";
import { State } from "../../redux/todosStore";

import styles from "./Filter.module.css";

const Filter = () => {
    const filter = useSelector((state: State) => state.filter);
    const dispatch = useDispatch();

    return (
        <select
            value={filter}
            className={styles.filterSelect}
            onChange={(e) => dispatch({ type: FilterActionTypes.SET, payload: e.target.value })}
        >
            <option value="all">Все</option>
            <option value="done">Выполненные</option>
            <option value="not done">Не выполненные</option>
        </select>
    );
};

export default Filter;
