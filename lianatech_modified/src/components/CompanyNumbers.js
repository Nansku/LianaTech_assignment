import React from "react";
import { Col, Row } from "react-bootstrap";

import face from "./img/SVG/face_48dp.svg";
import business from "./img/SVG/business_center_48dp.svg";
import earth from "./img/SVG/public_48dp.svg";
import CountUp from 'react-countup';

const CompanyNumbers = () => {

    return (

        <div class="container-fluid d-flex justify-content-center">
            <CountUp
                start={-875.039}
                end={160527.012}
                duration={2.75}
                separator=" "
                decimals={4}
                decimal=","
                prefix="EUR "
                suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            ></CountUp>
            <Row className="">
                <Col>
                    <img src={business} />
                </Col>

                <Col>
                    <span ref={countUpRef}></span>
                    <p>Clients</p>
                </Col>

                <Col>
                    <img src={face} />
                </Col>

                <Col>
                    <h1 id="value2" ></h1>
                    <p>Employees</p>
                </Col>

                <Col>
                    <img src={earth} />
                </Col>

                <Col >
                    <h1 id="value3"></h1>
                    <p>Daily users</p>
                </Col>
            </Row>
        </div>
    )
}

export default CompanyNumbers;