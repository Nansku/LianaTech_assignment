import React from "react";
import { Col, Row } from "react-bootstrap";

import bg_products from './img/bg_products.png'
import bg_company from './img/bg_company.png'
import bg_contact_us from './img/bg_contact.png'

const CompanyInfo = () => {
    return (
        <div class="container-fluid text-center pt-5 d-flex justify-content-center title" style={{fontSize: 28}}>
            <Row lg="auto" class="show-grid ">
                <Col xs={12} className="position-relative px-3">
                    <img src={bg_company} class="img-fluid" />
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <a href="#" className="text-white">Company</a>
                    </div>
                </Col>

                <Col xs={12} className="position-relative px-3" >
                    <img src={bg_products} class="img-fluid"/>
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <a href="#" className="text-white">Products</a>
                    </div>
                </Col>

                <Col xs={12} className="position-relative px-3" >
                    <img src={bg_contact_us} class="img-fluid"/>
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <a href="#" className="text-white">Contact us</a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CompanyInfo;