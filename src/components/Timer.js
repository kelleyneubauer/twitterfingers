import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";

// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
class Timer extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.startOnClick = this.startOnClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(duration, display) {
    var start = Date.now(),
      diff,
      minutes,
      seconds;
    function timer() {
      // get the number of seconds that have elapsed since
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      minutes = (diff / 60) | 0;
      seconds = diff % 60 | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (diff <= 0) {
        // add one second so that the count down starts at the full duration
        // example 05:00 not 04:59
        start = Date.now() + 1000;
      }
    }
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
  }

  startOnClick() {
    var minutes = 60,
      display = document.querySelector("#time");
    this.startTimer(minutes, display);
  }

  render() {
    return (
      <center>
        <Container className="timer-container">
          <Row>
            <Col>
              <Button
                className="start-button"
                variant="primary"
                onClick={this.startOnClick}
              >
                Start
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="timer">
              <span id="time"></span>
            </Col>
          </Row>
        </Container>
      </center>
    );
  }
}

export default Timer;
