import "./App.css";
import Navigation from "./components/Navigation";
import TweetDiv from "./components/TweetDiv";
import Timer from "./components/Timer";
import DisplayStats from "./components/DisplayStats";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col>
            <Timer />
          </Col>
        </Row>
        <Row>
          <Col>
            <TweetDiv
              tweetImg="https://pbs.twimg.com/profile_images/856629049547935744/ScErYmP0_400x400.jpg"
              twitterName="Oregon State University"
              twitterHandle="OregonState"
              tweetDate="Jul 6"
              likes="2K"
              comments="20"
              tweetContent="What's that one thing you just can't let go? Beavers: Flowing Water"
            />
          </Col>
        </Row>
        <Row>
          <DisplayStats />
        </Row>
      </Container>
    </>
  );
}

export default App;
