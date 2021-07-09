import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SettingsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Settings Modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Modal.Header closeButton>
            <h4>FILTERS:</h4>
          </Modal.Header>
          <br />
          <p>Placeholder</p>
          <br />
          <Modal.Header>
            <h4>GAME SETTINGS:</h4>
          </Modal.Header>
          <p>Placeholder</p>
          <br />
          <Modal.Header>
            <h4>STATS:</h4>
          </Modal.Header>
          <p>To be implemented in a future iteration...</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SettingsModal;
