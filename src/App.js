import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import "./Components/Login.css";
import GuardedRoute from "./Components/GuardedRoute";
import Home from "./Components/Home";
import { useState, useMemo } from "react";
import { UserContext } from "./UserContext";


function App() {

  const [userDetails, setUserDetails] = useState(null);
  const providerValue = useMemo(()=>({userDetails,setUserDetails}), [userDetails, setUserDetails]);

  return (

      
        <Router>
          <div>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home/>
          </Route>
          <UserContext.Provider value = {providerValue} >
          <Route path="/login" component={Login} >
            <Login/>
          </Route>
          <GuardedRoute path="/home" component={Landing}>
            <Landing />
          </GuardedRoute>
       </UserContext.Provider>

        </Switch>
        </div>
        </Router>
      
     
  );
}

export default App;
