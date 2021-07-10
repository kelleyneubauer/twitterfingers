import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import InfoModal from "./InfoModal";
import SettingsModal from "./SettingsModal";

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Twitter Fingers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <SettingsModal />
            <InfoModal />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
