import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {  createClass } from '../../services/classServices'
const Form = () => {
    
    const [show, setShow] = useState(false);
    const [value, setValue] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        createClass(value);
        handleClose();
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className="text-center">
          <button className="btn-create" onClick={handleShow}>
            New Class
          </button>
          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>
              Name: 
              <input type="text" value={value} onChange={handleChange}   />
            </label>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAdd}>
                Add Class
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
    
}
export default Form;