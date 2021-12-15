import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Infobar = () => {
    return (
        <Navbar className="nav-bg px-4 px-lg-5" expand="md" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="#home">News</Nav.Link>
                        <Nav.Link href="#link">Intranet</Nav.Link>
                        <NavDropdown title="Language" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">In English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">In Finnish</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Infobar;