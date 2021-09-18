import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Components/Login.css";
import GuardedRoute from "./Components/GuardedRoute";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}>
            <Login />
          </Route>
          <GuardedRoute path="/home" component={Home}>
            {/* <Nav /> */}
          </GuardedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
