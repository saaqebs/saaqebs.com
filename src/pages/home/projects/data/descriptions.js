const projectList = [
  {
    id: 0,
    name: "Tracking COVID-19 Data in NJ",
    description: "A repository containing the ongoing data collection of COVID-19 cases per each municipality in New Jersey. Also included elementary forecasting and analysis!",
    image: require("../images/covidnj.jpeg"),
    buttons: [
      {
        id: 0,
        name: "code",
        link: "https://github.com/saaqebs/covid19-newjersey"
      },
      {
        id: 1,
        name: "analysis",
        link: "https://github.com/saaqebs/analytics-coronavirus-nj"
      }
    ]
  },
  {
    id: 1,
    name: "Spotify Song Trends",
    description: "This project applied machine learning techniques like K‑Nearest Neighbors to 160,000+ songs, achieving ~99% accuracy in predicting Spotify success.",
    image: require("../images/spotify.png"),
    buttons: [
      {
        id: 0,
        name: "Github",
        link: "https://github.com/saaqebs/spotify-songs"
      }
      // {
      //   id: 1,
      //   name: "Link",
      //   link: "/search"
      // }
    ]
  },
  {
    id: 2,
    name: "Chess",
    description: "A project my team and I built for CS 3110 that includes an easy and hard AI to play against. Built using OCaml, the best programming language in the world!",
    image: require("../images/chess.jpeg"),
    buttons: [
      {
        id: 0,
        name: "Github",
        link: "https://github.com/saaqebs/chess",
      }
    ]
  },
  {
    id: 3,
    name: "Tastes Like Home",
    description: "An app that uses ad hoc information retrieval using the jaccard similarity to find a new restaurant in a specific city that matches your favorite restaurant!",
    image: require("../images/tasteslikehome.png"),
    buttons: [
      {
        id: 0,
        name: "Github",
        link: "https://github.com/cathyli-j/tasteslikehome",
      }
    ]
  }
];

export default projectList;
