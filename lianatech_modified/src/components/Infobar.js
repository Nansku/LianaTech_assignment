import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';

const Infobar = () => {
    return (
        <Navbar className="nav-bg paddingFullSite" expand="md" variant="dark" >
                <Nav className="justify-content-center justify-content-sm-end d-flex flex-row" style={{ width: "100%" }}>
                    <Nav.Link className="text-white me-4 me-md-0" href="#home">News</Nav.Link>
                    <Nav.Link className="text-white me-4 me-md-0"  href="#link">Intranet</Nav.Link>
                    <Form.Select className="w-auto">
                        <option>In English</option>
                        <option>In Finnish</option>
                    </Form.Select>
                </Nav>
        </Navbar>
    )
}

export default Infobar;