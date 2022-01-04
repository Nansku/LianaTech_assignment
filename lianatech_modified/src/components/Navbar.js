import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import logo from './img/liana-technologies-logo-2018.png'

const Navigationbar = () => {
    return (
        <Navbar className="bg-white py-3 paddingFullSite" expand="md">
            <Navbar.Brand href="#home" style={{ width: '10em' }}>
                <img alt="Liana technologies -logo" src={logo}
                    className="w-75" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Col className='ps-4'>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Company</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#contact_us">Contact Us</Nav.Link>
                    </Nav>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Form className="d-flex w-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="green">Search</Button>
                    </Form>
                </Col>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar;