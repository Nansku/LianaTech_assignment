import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import logo from './img/liana-technologies-logo-2018.png'
/*/img/SVG/liana-technologies-logo-2018.svg*/

const Navigationbar = () => {
    return (
        <Row className="container-fluid">
        <Navbar className="bg-white py-3 px-4 px-lg-5 " expand="md">
            <Navbar.Brand href="#home">
                    <img alt="Liana technologies -logo" src={logo}
                    style={{width: '10em'}}></img>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Col>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Company</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
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
                    <Button variant="success">Search</Button>
                </Form>
                </Col>
            </Navbar.Collapse>
        </Navbar>
        </Row>
    )
}

export default Navigationbar;