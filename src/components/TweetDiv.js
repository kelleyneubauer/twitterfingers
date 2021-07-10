import React from "react";
import { Form } from "react-bootstrap";
import useTypingGame from "react-typing-game-hook";

// Source: https://www.npmjs.com/package/react-typing-game-hook
const TweetDiv = (props) => {
  // Splits tweet into array of chars for parsing
  const {
    states: { chars, charsState },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(props.tweetContent);

  return (
    <>
      <center>
        <div className="game-divs">
          <img src={props.tweetImg} alt="User logo" />

          {/* Tweet Info */}
          <span className="tweet-info" id="twitter-name">
            {props.twitterName}
          </span>
          <span className="tweet-info" id="twitter-handle">
            @{props.twitterHandle}
          </span>
          <span id="twitter-date">{props.tweetDate}</span>

          {/* Tweet content is held here */}
          <p className="tweet" tabIndex={0}>
            {chars.split("").map((char, index) => {
              let state = charsState[index];
              let color =
                state === 0 ? "#657786" : state === 1 ? "black" : "red";
              return (
                <span key={char + index} style={{ color }}>
                  {char}
                </span>
              );
            })}
          </p>

          <hr />

          {/* Buttons for Tweet interaction */}
          <a href="#like" alt="like this tweet" className="interaction-links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#657786"
              className="bi bi-suit-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg>
            {props.likes}
          </a>

          <a href="#comment" alt="view comments" className="interaction-links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#657786"
              className="bi bi-chat"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
            {props.comments}
          </a>

          <a href="#share" alt="share this tweet" className="interaction-links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#657786"
              className="bi bi-box-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
              />
              <path
                fillRule="evenodd"
                d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
              />
            </svg>
            Share
          </a>
        </div>

        <Form>
          <Form.Group>
            {/* Handles keystrokes for color logic */}
            <Form.Control
              as="textarea"
              rows={4}
              className="game-divs tweet"
              onKeyDown={(e) => {
                const key = e.key;
                if (key === "Escape") {
                  resetTyping();
                } else if (key === "Backspace") {
                  deleteTyping(false);
                } else if (key.length === 1) {
                  insertTyping(key);
                }
              }}
            />
          </Form.Group>
        </Form>
      </center>
    </>
  );
};

export default TweetDiv;
