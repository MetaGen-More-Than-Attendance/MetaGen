import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "../../images/logo512.png";
import AuthenticationService from "../../services/AuthenticationService";

const Header = ({ userHasLogin, bg, setBg, fontColor, setFontColor, text, setText, setLectureBg }) => {
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

  const handleDark = () => {
   
    if (bg === "light") {
      setBg("dark");
      setFontColor("#EEE")
      setText("Dark Mode")
      setLectureBg("white")
    }
    else {
      setBg("light")
      setFontColor("black")
      setText("Light Mode")
      setLectureBg("#222831")
    }

  }

  return (
    <Navbar
      collapseOnSelect
      bg={bg}
      expand="lg"
      style={{ backgroundColor: "#222831" }}
    >
      <Container>
        <Navbar.Brand style={{ color: `${fontColor}` }}>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/lectures" style={{ color: `${fontColor}` }}>
              Lectures
            </Nav.Link>
          </Nav>
          <Nav>
            {hasLogin ? (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Nav.Link
                  as={NavLink}
                  to="/"
                  onClick={logout}
                  style={{
                    marginTop: 6,
                    height: "2.3rem",
                    color: `${fontColor}`,
                    borderRadius: 10,
                    marginRight: 5,
                  }}
                >
                  logout
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/profile"
                  style={{ color: `${fontColor}` }}
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
                  color: `${fontColor}`,
                  backgroundColor: "red",
                  borderRadius: 10,
                  marginRight: 5,
                }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
          <Button variant="primary" onClick={handleDark}>{text}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
