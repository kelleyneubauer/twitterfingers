import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
          <Form>
            <Form.Group>
              <Form.Label>#hashtag or @handle</Form.Label>
              <Form.Control type="text" defaultValue="@oregonstate" />
            </Form.Group>
            <Form.Group>
              <Form.Label>language</Form.Label>
              <Form.Control as="select">
                <option>en</option>
              </Form.Control>
            </Form.Group>
            <br />
            <Modal.Header>
              <h4>GAME SETTINGS:</h4>
            </Modal.Header>
            <br />
            <Form.Label>duration</Form.Label>
            <Form.Control
              type="text"
              required
              pattern="[0-9]{2}:[0-9]{2}"
              defaultValue="1:00"
            />
          </Form>

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
