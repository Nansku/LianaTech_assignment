import React, { useState } from "react";
import { Row, Col, Button, Form } from 'react-bootstrap';
import PopUp from "./PopUp";

const Newsletter = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <hr />
            <Row className="container-fluid text-center pt-4 pb-5">
                <Col>
                    <h3 className="title">Subscribe to our newsletter</h3>
                    <p>Follow our story and get the latest promotional<br />
                        news about our products and events.</p>

                    <Form className="form-inline d-flex justify-content-center align-items-center">
                        <Form.Control type="email" className="w-auto me-2" id="email" placeholder="Your email address" />
                        <Button onClick={() => setModalShow(true)} variant="green" id="subscribe" className="button_custom">Subscribe</Button>
                    </Form>
                </Col>
            </Row>
            <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}


export default Newsletter;