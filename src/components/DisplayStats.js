import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DisplayStats = () => {
  return (
    <div className="stats-container">
      <Container>
        <Row>
          <Col className="stats">27wpm</Col>
          <Col className="stats">92%</Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisplayStats;
