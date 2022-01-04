import React from "react";
import { NavLink } from "react-bootstrap";
import { Row, Col, Button } from 'react-bootstrap';
import facebookIcon from './img/SVG/icons8-facebook-circled.svg';
import twitterIcon from './img/SVG/icons8-twitter-circled.svg';
import linkedInIcon from './img/SVG/icons8-linkedin-circled.svg';

const Footer = () => {
    return (
        <div>
            <footer class="footer container-fluid py-5 paddingFullSite">
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
                <Row>
                    <Col className="d-flex justify-content-start align-items-end">
                        <Col xs="auto">
                            <h5>Sales and inquiries</h5>
                            <p className="m-0">
                                Email: sales@lianatech.com
                                <br />
                                Phone: +358 10 387 7053
                            </p>
                        </Col>

                        <Col xs="auto" className="mt-2 ms-4 ms-sm-5">
                            <Button variant="green">Contact us</Button>
                        </Col>
                    </Col>
                    <Col xs="auto"  className="d-flex justify-content-end align-items-end pt-3 pt-sm-0">
                        <Col className="d-flex">
                            <NavLink className="p-0"><img src={facebookIcon} /></NavLink>
                            <NavLink className="p-0"><img src={twitterIcon} /></NavLink>
                            <NavLink className="p-0"><img src={linkedInIcon}/></NavLink>
                        </Col>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default Footer;