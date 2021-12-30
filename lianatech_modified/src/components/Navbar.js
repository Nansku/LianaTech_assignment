import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import logo from './img/liana-technologies-logo-2018.png'
/*/img/SVG/liana-technologies-logo-2018.svg*/

const Navigationbar = () => {
    return (
        <Row className="container-fluid">
        <Navbar className="bg-white py-3 px-4 px-lg-5 flex align-items-center" expand="md">
            <Navbar.Brand href="#home">
                    <img alt="Liana technologies -logo" src={logo}
                    className='w-25'></img>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Col md={6} className="">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Company</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
                </Col>
                <Col md={6}>
                <Form className="d-flex">
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