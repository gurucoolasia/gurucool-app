import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from '../src/Components/Landing'
import "./Components/Login.css";
import GuardedRoute from "./Components/GuardedRoute";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <GuardedRoute path="/landing" component={Landing}>
            {/* <Nav /> */}
          </GuardedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
