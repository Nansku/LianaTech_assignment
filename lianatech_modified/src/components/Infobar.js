import React from 'react';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';

const Infobar = () => {
    return (
        <Navbar className="nav-bg px-4 px-lg-5" expand="md" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link className="text-white" href="#home">News</Nav.Link>
                    <Nav.Link className="text-white"  href="#link">Intranet</Nav.Link>
                    <Form.Select className="w-auto">
                        <option>In English</option>
                        <option>In Finnish</option>
                    </Form.Select>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Infobar;