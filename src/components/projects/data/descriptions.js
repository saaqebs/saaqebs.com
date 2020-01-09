const projectList = [
  {
    id: 0,
    name: "Chess",
    description: "A project my team and I built for CS 3110 that includes an easy and hard AI to play against. Built using the functional programming in OCaml, the best programming language in the world!",
    image: require("../images/chess.jpeg"),
    github: "https://github.com/saaqebs/Chess",
  },
  {
    id: 1,
    name: "Little Search Engine",
    description: "Imagine Google but at a smaller and local scale. This program could read many text documents and return the top 5 most popular documents based on keywords.",
    image: require("../images/search.jpeg"),
    github: "https://github.com/saaqebs/Data-Structures/tree/master/Little%20Search%20Engine",
  },
  {
    id: 2,
    name: "Tic Tac Toe",
    description: "A simple fun game that I used to introduce middle and high school kids to programming Java and object-oriented programming.",
    image: require("../images/tictactoe.jpg"),
    github: "https://github.com/saaqebs/TicTacToe",
  },
  {
    id: 3,
    name: "Wallpaper Updater",
    description: "A program that updates the wallpaper for MacOS everyday. It utilizes Unsplash's API since they have a large dataset of pictures. You could download and use it today!",
    image: require("../images/unsplash.png"),
    github: "https://github.com/saaqebs/wallpaper-updater-macos",
  }
];

export default projectList;
