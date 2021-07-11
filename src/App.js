import "./App.css";
import Navigation from "./components/Navigation";
import TweetDiv from "./components/TweetDiv";
import Timer from "./components/Timer";
import DisplayStats from "./components/DisplayStats";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mockTweets from "./mockTweets";

function App() {
  let randomIdx = Math.floor(Math.random() * mockTweets.length);

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
              twitterHandle={mockTweets[randomIdx].twitterHandle}
              twitterName={mockTweets[randomIdx].twitterName}
              tweetImg={mockTweets[randomIdx].tweetImg}
              tweetContent={mockTweets[randomIdx].tweetContent}
              tweetDate={mockTweets[randomIdx].tweetDate}
              likes={mockTweets[randomIdx].likes}
              comments={mockTweets[randomIdx].comments}
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
