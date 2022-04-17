import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "../../images/logo512.png";
import AuthenticationService from "../../services/AuthenticationService";

const Header = ({ userHasLogin }) => {
  const [hasLogin, setHasLogin] = useState(false);
  let authenticationService = new AuthenticationService();
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setHasLogin(true);
    }
  }, [hasLogin]);

  function logout() {
    authenticationService.logout();
    setHasLogin(false);
    userHasLogin(false);
  }
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      expand="lg"
      style={{ backgroundColor: "#222831" }}
      className="mb-3"
    >
      <Container>
        <Navbar.Brand style={{ color: "#EEEEEE" }}>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" style={{ color: "#EEEEEE" }}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lectures" style={{ color: "#EEEEEE" }}>
              Lectures
            </Nav.Link>
          </Nav>
          <Nav>
            {hasLogin ? (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  onClick={logout}
                  style={{
                    marginTop: 6,
                    height: "2.3rem",
                    color: "#000",
                    backgroundColor: "#EEE",
                    borderRadius: 10,
                    marginRight: 5,
                  }}
                >
                  logout
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/profile"
                  style={{ color: "#EEEEEE" }}
                >
                  <Image style={{ width: "2rem", height: "2rem" }} src={img} />
                </Nav.Link>
              </div>
            ) : (
              <Nav.Link
                as={NavLink}
                to="/login"
                style={{
                  marginTop: 6,
                  height: "2.3rem",
                  color: "#000",
                  backgroundColor: "#EEE",
                  borderRadius: 10,
                  marginRight: 5,
                }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
