import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import face from "./img/SVG/face_48dp.svg";
import business from "./img/SVG/business_center_48dp.svg";
import earth from "./img/SVG/public_48dp.svg";
import CountUp from 'react-countup';

const CompanyNumbers = () => {

    return (
        <div class="container-fluid d-flex justify-content-center pt-5 pb-2">
            <Row>
                <Col>
                    <img src={business} />
                </Col>

                <Col>
                    {/* <i>{count}</i> */}
                    <CountUp isCounting start={3000} end={Number.MAX_SAFE_INTEGER/10} duration={Number.MAX_SAFE_INTEGER} />
                    <p>Clients</p>
                </Col>

                <Col>
                    <img src={face} />
                </Col>

                <Col>
                <CountUp isCounting start={180} end={Number.MAX_SAFE_INTEGER/5} duration={Number.MAX_SAFE_INTEGER} />
                    <p>Employees</p>
                </Col>

                <Col>
                    <img src={earth} />
                </Col>

                <Col >
                <CountUp isCounting start={10000} end={Number.MAX_SAFE_INTEGER/3} duration={Number.MAX_SAFE_INTEGER} />
                    <p>Daily users</p>
                </Col>
            </Row>
        </div>
    )
}

export default CompanyNumbers;