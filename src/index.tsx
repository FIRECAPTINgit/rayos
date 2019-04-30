import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Player from "./Player";
import Terminal from "./terminal";
import Signup from "./Signup";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/raymusic" component={Player} />
      <Route path="/rayterminal" component={Terminal} />
      <Route path="/signup" component={Signup} />
      <Route component={App} />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
