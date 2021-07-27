import React from "react";

import "./Counter.css";

export default class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                Осталось выполнить: {this.props.todosCount}
            </div>
        );
    }
}
