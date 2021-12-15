import React from "react";
import { Col, Row } from "react-bootstrap";

import bg_products from './img/bg_products.png'
import bg_company from './img/bg_company.png'
import bg_contact_us from './img/bg_contact.png'

const CompanyInfo = () => {
    return (
        <section class="container-fluid text-center pt-5">
            <Row class="show-grid mx-center">
                <Col sm={12} md={4} className="position-relative">
                    <img src={bg_company} class="img-fluid" />
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <a href="#" >Company</a>
                    </div>
                </Col>

                <Col sm={12} md={4} className="position-relative" >
                    <img src={bg_products}  />
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <a href="#">Products</a>
                    </div>
                </Col>

                <Col sm={12} md={4} className="position-relative" >
                    <img src={bg_contact_us}/>
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <a href="#">Contact us</a>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default CompanyInfo;