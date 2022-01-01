import React from "react";
import { Modal, Button } from 'react-bootstrap'

function PopUp(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body className="text-center">
        <h4>Thanks for subscribing!</h4>
        <p>
          You have successfully subscribed to our newsletter.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default PopUp;