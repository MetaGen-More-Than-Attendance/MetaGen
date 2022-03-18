import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" className='mb-3'>
            <Container>
                <Navbar.Brand >MetaGen</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/lectures">Lectures</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/login" >Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/signup" >Sign up</Nav.Link>
                        <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;