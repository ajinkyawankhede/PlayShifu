import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./login/login";
import Register from "./register/register";
import Form from "./home/form";
import Topbar from "./home/home";
import Feedback from "./home/feedback";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/home" component={Topbar} />
        <Route exact path="/feedbackList" component={Feedback} />
      </Switch>
    </Router>
  );
}

export default App;
