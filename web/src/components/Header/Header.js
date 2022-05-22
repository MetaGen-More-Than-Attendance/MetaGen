import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "../../images/logo512.png";
import logo from "../../images/metagenLogo.png";
import AuthenticationService from "../../services/AuthenticationService";
import { fetchGivenStudentIdData } from "../../redux/features/student/studentSlice";

const Header = ({ userHasLogin, bg, setBg, fontColor, setFontColor, text, setText, setLectureBg }) => {
  const [hasLogin, setHasLogin] = useState(false);
  const id = localStorage.getItem("userId");
  const isAdmin = localStorage.getItem("isAdmin");
  const dispatch = useDispatch();

  const student = useSelector((state) => state.students.entities);


  useEffect(() => {
    dispatch(fetchGivenStudentIdData(id));
  }, [dispatch, id]);

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
        <Navbar.Brand style={{ color: `${fontColor}`, display: 'flex', flexDirection: 'row' }}>
          <Nav.Link as={NavLink} to="/home" style={{ color: `${fontColor}`, padding: 0 }}>
            <Image style={{ width: "3rem", height: "3rem" }} src={logo} />
          </Nav.Link>
          <h1 style={{ color: "#00ADB5", fontSize: 25, marginTop: 7, marginLeft: 5,}}>MetaGen</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{padding: 0 }}>
          <Nav.Link className="me-auto">
            {isAdmin === "true" ?
              null :
              <Nav.Link as={NavLink} to="/lectures" style={{ color: `${fontColor}`, padding: 0 }}>
                Lectures
              </Nav.Link>
            }
          </Nav.Link>
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
                {isAdmin === "true" ? null : <Nav.Link
                  as={NavLink}
                  to="/profile"
                  style={{ color: `${fontColor}` }}
                >
                  <Image src={`data:image/jpeg;base64,${student.photo}`} roundedCircle={true} style={{ width: "2rem", height: "2rem" }} />
                </Nav.Link>}
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
          <Button style={{ backgroundColor: "#00ADB5" }} onClick={handleDark}>{text}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
