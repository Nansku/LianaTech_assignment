import React from "react";
import { NavLink } from "react-bootstrap";
import { Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer class="footer container-fluid py-5 px-4 px-lg-5">
                <Row className="pb-4">
                    <Col xs={12} md={6} className="d-flex justify-content-start">
                        <h4>Liana Technologies</h4>
                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-end flex-column flex-sm-row">
                        <NavLink className="text-white mt-2 m-sm-0">Company</NavLink>
                        <NavLink className="text-white mt-2 m-sm-0">Products</NavLink>
                        <NavLink className="text-white mt-2 m-sm-0">Contact us</NavLink>
                        <NavLink className="text-white mt-2 m-sm-0">News</NavLink>
                        <NavLink className="text-white mt-2 m-sm-0">Intranet</NavLink>
                    </Col>


                </Row>
                <Row className="d-flex justify-content-start align-items-end">
                    <Col md="auto" >
                        <h5>Sales and inquiries</h5>
                        <p className="m-0">
                            Email: sales@lianatech.com
                            <br />
                            Phone: +358 10 387 7053
                        </p>
                    </Col>

                    <Col md="auto" className="mt-2 ">
                        <Button variant="green">Contact us</Button>
                    </Col>

                    <Col md="auto" className="d-flex align-items-end justify-content-end">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default Footer;