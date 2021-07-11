import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import TimerSettings from "./TimerSettings";

const SettingsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // language options at https://developer.twitter.com/en/docs/twitter-api/tweets/search/integrate/build-a-query
  let languages = [
    { label: "English", value: "en" },
    { label: "Arabic", value: "ar" },
    { label: "German", value: "de" },
    { label: "Russian", value: "ru" },
    { label: "Spanish", value: "es" },
  ];

  return (
    <>
      <div class="nav-icon" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-gear-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      </div>
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
                {languages.map((language) => (
                  <option key={language.label} value={language.value}>
                    {language.label + " (" + language.value + ")"}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <br />
            <Modal.Header>
              <h4>GAME SETTINGS:</h4>
            </Modal.Header>
            <br />
            <Form.Label>duration</Form.Label>
            <TimerSettings />
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
