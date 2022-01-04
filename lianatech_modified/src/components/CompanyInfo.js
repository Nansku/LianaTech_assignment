import React from "react";
import { Col, Row } from "react-bootstrap";

import bg_products from './img/bg_products.png'
import bg_company from './img/bg_company.png'
import bg_contact_us from './img/bg_contact.png'

const CompanyInfo = () => {
    return (
        <div className="container-fluid text-center pt-5 d-flex justify-content-center title companyInfo">
            <Row className="show-grid">
                <Col xs={12} sm={4} className="position-relative px-3">
                    <a href="#" className="text-white">
                        <img src={bg_company} className="img-fluid"/>
                        <div className="position-absolute top-50 start-50 translate-middle">
                            Company
                        </div>
                    </a>
                </Col>

                <Col xs={12} sm={4} className="position-relative px-3 mt-3 mt-sm-0" >
                    <a href="#" className="text-white">
                        <img src={bg_products} className="img-fluid" />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            Products
                        </div>
                    </a>
                </Col>

                <Col xs={12} sm={4} className="position-relative px-3 mt-3 mt-sm-0" >
                    <a href="#" className="text-white">
                        <img src={bg_contact_us} className="img-fluid" />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            Contact us
                        </div>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default CompanyInfo;