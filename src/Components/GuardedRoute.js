import React from 'react'
import { Route,Redirect } from "react-router-dom";
const authentication={
    isLoggedin:false,
    onAuthentication(){
      this.isLoggedin=true;
    },
    getLoggedInStatus(){
        return this.isLoggedin;
    }
 }
function GuardedRoute(props) {
    
    return (
        <Route path={props.path} render={data=>authentication.getLoggedInStatus()?(<props.component{...data}></props.component>):(<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
    )
}

export default GuardedRoute
export {authentication};