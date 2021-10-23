import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";

const Header = () => {
    const activeStyle = {
    fontWeight: "bold",
    color: "#F37334",
    borderBottom: "2px solid #F37334"
    }

    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container varient="light">
                <Navbar.Brand as={NavLink} to="/home"><img src={logo} alt="Brand" width="220"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto fs-5">
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/services">Services</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/events">Events</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;