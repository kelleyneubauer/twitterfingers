import "./App.css";
import Navigation from "./components/Navigation";
import TweetDiv from "./components/TweetDiv";
import Timer from "./components/Timer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mockTweets from "./mockTweets";

function App() {
  let randomIdx = Math.floor(Math.random() * mockTweets.length);

  return (
    <>
      <Navigation />
      <Container>
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
          <Col>
            <Timer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
