import React, { useState } from "react";
import { Row, Col, Button, Form } from 'react-bootstrap';
import PopUp from "./PopUp";
import validator from 'validator'

const Newsletter = () => {
    const [modalShow, setModalShow] = useState(false);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const findFormErrors = () => {
        const { email } = form
        const newErrors = {}

        // If given email is not correct:  
        if (!validator.isEmail(email)) {
            newErrors.email = 'Enter valid email'
        } 
          
        return newErrors;
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = findFormErrors()

        if (Object.keys(newErrors).length > 0) {
            // Show current errors
            setErrors(newErrors)
        } else {
            // If no errors, show pop-up
            setModalShow(true);
        }
    }

    return (
        <div>
            <hr />
            <Row className="container-fluid text-center pt-4 pb-5">
                <Col xs={12}>
                    <h3 className="title">Subscribe to our newsletter</h3>
                    <p>Follow our story and get the latest promotional<br />
                        news about our products and events.</p>
                </Col>

                <Col xs={12}>
                    <Form className="form-inline d-flex justify-content-center align-items-center">
                        
                        <Form.Control onChange={e => setField('email', e.target.value)}
                            isInvalid={!!errors.email} type="email" className="w-auto me-2" id="email" placeholder="Your email address" />
                        
                        <Form.Control.Feedback type='invalid' className="w-auto pe-2">
                            {errors.email}
                        </Form.Control.Feedback> 
                            
                        <Button /* onClick={() => setModalShow(true)} */ onClick={handleSubmit} variant="green" id="subscribeNewsletter">Subscribe</Button>                       
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