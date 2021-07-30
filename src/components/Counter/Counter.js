import React from "react";

import styles from "./Counter.module.css";

export default class Counter extends React.Component {
    render() {
        return (
            <div className={styles.counter}>
                Осталось выполнить: {this.props.todosCount}
            </div>
        );
    }
}
