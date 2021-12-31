import React from "react";
import { Row, Col, Button, Form } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <div>
            <hr/>
            <Row className="container-fluid text-center pt-4 pb-5">
                <Col>
                    <h3 className="title">Subscribe to our newsletter</h3>
                    <p>Follow our story and get the latest promotional<br/>
                        news about our products and events.</p>

                        <Form className="form-inline d-flex justify-content-center align-items-center">
                        <Form.Control type="email" className="w-auto me-2" id="email" placeholder="Your email address" />
                        <Button variant="green" id="subscribe" type="submit" className="button_custom">Subscribe</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}


export default Newsletter;