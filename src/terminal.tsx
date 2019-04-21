import React, { Component } from "react";
import "./terminal.css";
export default class Terminal extends Component {
  render() {
    return (
      <div className="terminal">
        <div className="navbar navbar-light bg-light">
          <a href="/" className="navbar-brand">
            Ray_Terminal_Alpha0.0.1
          </a>
        </div>
        <input type="text" className="form-control terminal-input" />
      </div>
    );
  }
}
