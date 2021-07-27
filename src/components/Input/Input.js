import React from "react";

import "./Input.css";

export default class Input extends React.Component {
    render() {
        return (
            <textarea
                className="input"
                placeholder="Введите текст"
                required
            ></textarea>
        );
    }
}
