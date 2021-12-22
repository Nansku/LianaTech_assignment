import React from "react";
import { NavLink } from "react-bootstrap";
import { Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer class="footer container-fluid py-5 px-4 px-lg-5">
                <Row>
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
                <Row>
                    <div class="col-12 col-lg-4 col-xl-3 text-left">
                        <h5>Sales and inquiries</h5>
                        <p>Email: sales@lianatech.com</p>
                        <p>Phone: +358 10 387 7053</p>
                    </div>

                    <div class="col-12 col-lg-3 col-xl-4  text-left d-flex align-items-end mb-1">
                        <Button className="button_custom">Contact us</Button>
                    </div>

                    <div class="col-12 col-lg-5 d-flex align-items-end social social_icon">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </Row>
            </footer>
        </div>
    )
}

export default Footer;