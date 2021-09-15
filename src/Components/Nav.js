import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { clientId } from "./Login";

function Nav() {
  const history = useHistory();
  const [showlogoutButton, setShowlogoutButton] = useState(true);
  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowlogoutButton(false);
    history.push("/");
  };
  return showlogoutButton ? (
    <GoogleLogout
      clientId={clientId}
      buttonText="Sign Out"
      onLogoutSuccess={onSignoutSuccess}
      icon={false}
    ></GoogleLogout>
  ) : null;
}

export default Nav;
