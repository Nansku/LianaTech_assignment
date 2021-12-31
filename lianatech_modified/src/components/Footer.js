import React from "react";
import { NavLink } from "react-bootstrap";
import { Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer class="footer container-fluid py-5 px-4 px-lg-5">
                <Row className="pb-4">
                    <Col lg={6} className="d-flex justify-content-start">
                        <h4>Liana Technologies</h4>
                    </Col>

                    <Col lg={6} className="d-flex justify-content-end">
                        <NavLink className="text-white">Company</NavLink>
                        <NavLink className="text-white">Products</NavLink>
                        <NavLink className="text-white">Contact us</NavLink>
                        <NavLink className="text-white">News</NavLink>
                        <NavLink className="text-white">Intranet</NavLink>
                    </Col>


                </Row>
                <Row className="d-flex justify-content-start align-items-end">
                    <Col lg="auto" class="col-12 col-lg-4 col-xl-3">
                        <h5>Sales and inquiries</h5>
                        <p className="m-0">Email: sales@lianatech.com
                            <br />
                            Phone: +358 10 387 7053</p>
                    </Col>

                    <Col lg="auto" class="col-12 col-lg-3 col-xl-4 ">
                        <Button variant="green">Contact us</Button>
                    </Col>

                    <Col lg="auto" className="d-flex align-items-end justify-content-end">
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