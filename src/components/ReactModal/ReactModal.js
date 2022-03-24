import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./ReactModal.css";

const ReactModal = (props) => {
    const { title, image, price, description } = props.product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
              <div>
                <img className='w-50' src={image} alt="" />
                <Modal.Title>{title}</Modal.Title>
                <p>Price: {price}</p>
              </div>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ReactModal;