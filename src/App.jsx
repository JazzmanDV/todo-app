import React from "react";

import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import ResetButton from "./components/ResetButton/ResetButton";

import "./App.css";

const App = () => (
    <div className={"app"}>
        <ResetButton />
        <Counter />
        <TextInput />
        <Filter />
        <TodoList />
    </div>
);

export default App;
