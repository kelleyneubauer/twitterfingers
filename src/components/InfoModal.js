import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
//import Button from "react-bootstrap/Button";

const InfoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="nav-icon" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-info-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </div>
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
