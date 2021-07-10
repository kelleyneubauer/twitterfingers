import "./App.css";
import Navigation from "./components/Navigation";
import TweetDiv from "./components/TweetDiv";

function App() {
  return (
    <>
      <Navigation />
      <TweetDiv
        tweetImg="https://pbs.twimg.com/profile_images/856629049547935744/ScErYmP0_400x400.jpg"
        twitterName="Oregon State University"
        twitterHandle="OregonState"
        tweetDate="Jul 6"
        likes="2K"
        comments="20"
        tweetContent="What's that one thing you just can't let go? Beavers: Flowing Water"
      />
    </>
  );
}

export default App;
