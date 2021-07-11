import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DisplayStats = (props) => {
  return (
    <div className="stats-container">
      <Container>
        <Row>
          <Col className="stats">{props.wpm}wpm</Col>
          <Col className="stats">{props.accuracy}%</Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisplayStats;
