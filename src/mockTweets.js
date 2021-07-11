const mockTweets = [
  {
    twitterHandle: "OregonState",
    twitterName: "Oregon State University",
    tweetImg:
      "https://pbs.twimg.com/profile_images/856629049547935744/ScErYmP0_400x400.jpg",
    tweetContent:
      "Udderly ridiculous that a university public safety department would handle a call of loose cows? Then you might not have herd@OregonState is a land grant university. Cows mooved to a safe location. And now we're done milking this tweet for cow puns!",
    tweetDate: "Jun 30",
    likes: "64",
    comments: "3",
  },
  {
    twitterHandle: "OregonState",
    twitterName: "Oregon State University",
    tweetImg:
      "https://pbs.twimg.com/profile_images/856629049547935744/ScErYmP0_400x400.jpg",
    tweetContent:
      "Congratulations to the 7,391 students graduating today. We are proud of your accomplishments, hard work, and dedication. As your next adventure unfolds remember that you'll always have a home here.",
    tweetDate: "Jun 12",
    likes: "252",
    comments: "6",
  },
  {
    twitterHandle: "OregonState",
    twitterName: "Oregon State University",
    tweetImg:
      "https://pbs.twimg.com/profile_images/856629049547935744/ScErYmP0_400x400.jpg",
    tweetContent:
      "Fitting that on #WorldOceanDay we get to announce @oregonstate has been selected to lead a new NOAA institute for marine research, focusing on conservation, protection and restoration of marine resources and more in collaboration with @NOAAResearch: beave.es/3so.",
    tweetDate: "Jun 8",
    likes: "126",
    comments: "0",
  },
  {
    twitterHandle: "MarineBiologists",
    twitterName: "Marine & Environment Biologists",
    tweetImg:
      "https://pbs.twimg.com/profile_images/1357403629917900800/ErDGv-kv_400x400.jpg",
    tweetContent:
      "Swordfish and Marlin are the fastest fish in the ocean reaching speeds up to 75 mph in quick bursts; Blue-fin Tuna may reach sustained speeds up to 56 mph.",
    tweetDate: "Aug 18",
    likes: "5.3K",
    comments: "1.1K",
  },
  {

    twitterHandle: "imthepope",
    twitterName: "Pope John XXIII",
    tweetImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ioannes_XXIII%2C_by_De_Agostini%2C_1958%E2%80%931963.jpg/1200px-Ioannes_XXIII%2C_by_De_Agostini%2C_1958%E2%80%931963.jpg",
    tweetContent:
      "Consult not your fears but your hopes and your dreams. Think not about your frustrations, but about your unfulfilled potential. Concern yourself not with what you tried and failed in, but with what it is still possible for you to do.",
    tweetDate: "Jun 18",
    likes: "351K",
    comments: "12",
  },
  {
    twitterHandle: "mariyouranne",
    twitterName: "Marianne Williamson",
    tweetImg:
      "https://pbs.twimg.com/profile_images/859507720814305281/nTvKAGL6_400x400.jpg",
    tweetContent:
      "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us. We ask ourselves, 'Who am I to be brilliant, gorgeous, talented, fabulous?'",
    tweetDate: "Apr 16",
    likes: "962K",
    comments: "2.01K",
  },
  {
    twitterHandle: "marinebiology4life",
    twitterName: "Marine Biologists For Fun",
    tweetImg:
      "https://pbs.twimg.com/profile_images/3320474107/66a262c19dc2e5a29e79c21f50a80a22_400x400.jpeg",
    tweetContent:
      "Did you know that a group of dolphins is called a pod, eel or oysters a bed, fish a school or shoal, jellyfish a fluther or smack, salmon a bind, draught or run, sea urchins a herd, trout a hover and turtles a bale, dole or nest?",
    tweetDate: "Mar 23",
    likes: "1K",
    comments: "1.3K",
  },
  {
    twitterHandle: "astronomyrules",
    twitterName: "Astronomy Fun Facts",
    tweetImg:
      "https://pbs.twimg.com/profile_images/1232211937406136321/QzynHP88_400x400.jpg",
    tweetContent:
      "Gamma-ray bursts can release more energy in 10 seconds than our Sun will in its entire life! Nothing in the Universe rivals the power unleashed during a gamma-ray burst, a brief but incredibly intense flash of high-energy radiation. There are many types of GRB: some are thought to form when a massive star implodes; others when two neutron stars merge together.",
    tweetDate: "May 3",
    likes: "1.1K",
    comments: "1.8K",
  },
  {
    twitterHandle: "prettyskyaboveus",
    twitterName: "The Stars Are Awesome",
    tweetImg:
      "https://pbs.twimg.com/profile_images/948476982949564417/g0Hbetng_400x400.jpg",
    tweetContent:
      "As regions of space are whizzing away from one another at an ever-increasing rate, the first population of stars to form in the Universe are now too far away for us to ever hope of spying them – even using the best present or future telescope.",
    tweetDate: "Mar 23",
    likes: "1K",
    comments: "1.3K",
  },
  {
    twitterHandle: "ILoveEating",
    twitterName: "Food Is Delicious",
    tweetImg:
      "https://pbs.twimg.com/profile_images/857121109543714816/QF8VmTgA_400x400.jpg",
    tweetContent:
      "The sandwich was popularized in 1762 by John Montagu, the 4th Earl of Sandwich. Apparently, Montagu had a gambling problem that made him spend hours at the card table. He asked the house cook to bring him something he could eat without leaving his seat. Finally, the cook presented him with what we now know and love as the sandwich.",
    tweetDate: "Aug 27",
    likes: "15K",
    comments: "132",
  },
  {
    twitterHandle: "foodfunfacts",
    twitterName: "Things They Won't Teach You In School",
    tweetImg:
      "https://pbs.twimg.com/profile_images/1410529183667834882/s6hAtxer_400x400.jpg",
    tweetContent: "Black pepper was so valuable, it used to be a currency in the Middle Ages. High prices, scarce supply, and the mystery surrounding the origins of spices fueled a growing effort to discover spices and their source of cultivation.",
    tweetDate: "Apr 13",
    likes: "862",
    comments: "3.1K",
  },
  {
    twitterHandle: "Hersheys",
    twitterName: "HERSHEY'S",
    tweetImg:
      "https://pbs.twimg.com/profile_images/1268205157030014976/cO0BEs3O_400x400.jpg",
    tweetContent:
      "Happy #InternationalWomensDay. From mothers and sisters to daughters and granddaughters; from aunts to nieces and goddaughters to godmothers; from neighbors to colleagues & friends to strangers; we want to celebrate every woman. Who are YOU celebrating?",
    tweetDate: "Mar 8",
    likes: "124",
    comments: "18",
  },
];

export default mockTweets;
