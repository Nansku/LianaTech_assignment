import React from "react";
import { Row, Col, Button, Form } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <Row className="text-center d-flex">
            <Col className="justify-center">
                <h3>Subscribe to our newsletter</h3>
                <p>Follow our story and get the latest promotional
                    news about our products and events.</p>

                <Form className="form-inline d-flex justify-content-center align-items-center">
                    <Form.Control type="email" className="w-auto" id="email" placeholder="Your email address" />
                        <Button id="subscribe" type="submit" className="button_custom">Subscribe</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default Newsletter;