import React, { FC } from "react";

import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import ResetButton from "./components/ResetButton/ResetButton";

import styles from "./App.module.css";

const App: FC = () => (
    <div className={styles.app}>
        <div className={styles.wrapper}>
            <div className={styles.resetButtonWrapper}>
                <ResetButton />
            </div>
            <div className={styles.counterWrapper}>
                <Counter />
            </div>
        </div>
        <TextInput />
        <Filter />
        <TodoList />
    </div>
);

export default App;
