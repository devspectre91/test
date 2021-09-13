import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./index.css";
ReactDOM.render(
  <Router>
    {" "}
    <App />{" "}
  </Router>,
  document.getElementById("root")
);
