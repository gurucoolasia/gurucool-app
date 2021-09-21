import React from "react";
import { Carousel, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  const style = {
    backgroundColor: "#3C58A7",
    padding: "5px",
    height: "50px",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    opacity: "0.8",
  };
  const bsignin = {
    textColor: "white",
    fontWeight: "bolder",
    fontSize: "large",
  };
  const iStyle = {
    backgroundColor: "#3C58A7",
    padding: "5px",
  };
  return (
    <div>
      <div>
        <Navbar
          style={style}
          collapseOnSelect
          expand="lg"
          variant="light"
          fixed="top"
        >
          {/* <Container> */}
          <Navbar.Brand href="#home" className="current">
            <img
              style={iStyle}
              src="logo.png"
              width="100%"
              height="40"
              className="d-inline-block align-top"
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
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="nav_content">
                <ul className="nav_content">
                  <li>About</li>
                  <li>Students</li>
                  <li>Professionals</li>
                  <li>Organisations</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
              </Nav.Link>
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
            <Nav style={bsignin}>
              <Navbar.Brand>
                <Nav.Link href="/login" style={{ color: "white" }}>
                  Sign in
                </Nav.Link>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
      <Carousel>
        <Carousel.Item interval={1000} className="Active">
          <img
            className="d-block w-100 change"
            src="https://www.gurucool.asia/assets/img/im3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="content">
              Opportunity to sponsor projects to prototype solutions around
              business problems
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 change"
            src="https://www.gurucool.asia/assets/img/im1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 className="content">
              Exposure to the real work environment to make a better transition
              into the workplace.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 change"
            src="https://www.gurucool.asia/assets/img/im2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 className="content">
              Gain experience to lead while helping individuals learn and grow
              with a purpose to solve business problem
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
