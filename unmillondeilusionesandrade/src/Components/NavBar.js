import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" background-color='D76EDF'>
            <Container>
                <Navbar.Brand href="#home">Un millon de ilusiones</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-basic">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#girls">Girls</Nav.Link>
                    <Nav.Link href="#boys">Boys</Nav.Link>
                    <Nav.Link href="#gifts">Gifts</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default Navigation;