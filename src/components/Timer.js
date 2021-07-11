import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
const Timer = () => {
  function startTimer(duration, display) {
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

  window.onload = function () {
    var minutes = 60,
      display = document.querySelector("#time");
    startTimer(minutes, display);
  };

  return (
    <center>
      <Container className="timer-container">
        <Row>
          <Col className="timer">
            <span id="time"></span>
          </Col>
        </Row>
      </Container>
    </center>
  );
};

export default Timer;
