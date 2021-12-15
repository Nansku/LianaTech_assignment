import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from './img/logo2.jpg'


const Navigationbar = () => {
    return (
        <Navbar className="bg-white px-4 px-lg-5" expand="md">
            <Navbar.Brand href="#home">
                <a href="#">
                    <img alt="Liana technologies -logo" src={logo}
                    className='w-25'></img>
                </a>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Company</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar;