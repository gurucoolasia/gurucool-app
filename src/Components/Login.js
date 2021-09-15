import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { authentication } from "./GuardedRoute";

const clientId =
  "357348957806-h9b7jj8fo250agihnjkt3a994digvdet.apps.googleusercontent.com";

function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const history = useHistory();
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    authentication.onAuthentication();
    history.push("/nav");
    setShowloginButton(false);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div className="container">
      <div>
        <img src="favicon.png" alt="" />
      </div>
      <div className="login-button">
        {showloginButton ? (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In With Google"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            theme="dark"
          />
        ) : null}
      </div>
    </div>
  );
}
export default Login;
export { clientId };
