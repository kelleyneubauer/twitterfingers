import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const InfoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Info Modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Modal.Header closeButton>
            <h4>ABOUT:</h4>
          </Modal.Header>
          <br />
          <p>
            Twitter Fingers is a typing game created by Kelley Neubauer,
            Gabrielle Josephson, Kathleen O'Connor, and Ali Alameedi during the
            Summer 2021 Beaverhacks Hackathon at Oregon State University. It
            uses the Twitter API, React, and Bootstrap.
          </p>
          <br />
          <Modal.Header>
            <h4>HOW TO PLAY:</h4>
          </Modal.Header>
          <br />
          <p>Just start typing the Tweet text...</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InfoModal;
