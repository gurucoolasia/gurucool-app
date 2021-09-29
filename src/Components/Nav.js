import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { clientId } from "./Login";
import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import Avatar from '@material-ui/core/Avatar' //new add
import { Menu, MenuItem  } from "@material-ui/core"; //new add
// import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";



function Nav1() {
  const style = {
    padding: "5px",
  };
  const iStyle = {
    backgroundColor: "#348BD0",
    padding: "5px",
  };
  const bstyle = {
    boxShadow: "none",
    border: "none",
    backgroundColor: "white",
  };

  const history = useHistory();

  const[open,setOpen]=useState(null);// new add

  const handleOpen= (event) =>{
    setOpen(event.currentTarget); // new add
  };

  const handleClose=()=>{
    setOpen(false);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    history.push("/");
  };
  return (
    <div>
      <Navbar
        style={style}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        {/* <Container> */}
        <Navbar.Brand href="#home">
          <img
            src="logo.png"
            width="100%"
            height="40"
            className="d-inline-block align-top"
            style={iStyle}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#home">
            {/* <img
            src="favicon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> */}
            GC
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">{/* Features */}</Nav.Link>
            <Nav.Link href="#pricing">{/* Pricing */}</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>

          <Avatar  onClick={handleOpen}  className="avt" src="/account.png" />
          {/* <PersonIcon onclick={handleOpen}  className="avt"/> */}
         
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

      <Menu id='menu' onClose={handleClose} anchorEl={open} open={Boolean(open)}> 
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>features</MenuItem>
            
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Help</MenuItem>

            <MenuItem>
            <GoogleLogout
              clientId={clientId}
              render={renderProps=>(<button onClick={renderProps.onClick} style={bstyle}>Sign Out</button>)}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
              icon={false}
            ></GoogleLogout>

            </MenuItem>
           
          </Menu>
    </div>
  );
}

export default Nav1;
