import React, { Component } from 'react';

import './styles/projects.scss'

class Projects extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="portfolio" id="portfolio">
          <ul>
            <li>
              <div className="container">
                <div className="front" id="chess">
                  <div className="inner">
                    <p>Chess</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      A project my team and I built for CS 3110 that includes an
                      easy and hard AI to play against. Built using OCaml, the
                      best programming language in the world!
                    </p>
                    <a className="btn btn-secondary" id="github" href="https://github.com/saaqebs/Chess" role="button">github</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="container">
                <div className="front" id="search-engine">
                  <div className="inner">
                    <p>Little Search Engine</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Imagine Google but at a smaller and local scale. Could
                      read many text documents and return the top 5 most
                      popular documents based on keywords.
                    </p>
                    <a className="btn btn-secondary" id="github" href="https://github.com/saaqebs/Data-Structures/tree/master/Little%20Search%20Engine" role="button">github</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="container">
                <div className="front" id="tic-tac-toe">
                  <div className="inner">
                    <p>Tic-Tac-Toe</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      A game that I used to introduce middle and high school
                      kids to Java and object-oriented programming.
                    </p>
                    <a className="btn btn-secondary" id="github" href="https://github.com/saaqebs/TicTacToe" role="button">github</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="container">
                <div className="front" id="unsplash">
                  <div className="inner">
                    <p>Wallpaper Updater</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      A program that updates the wallpaper for MacOS everyday.
                      It utilizes Unsplash's API since they have a large
                      dataset of pictures. You could download and use it today!
                    </p>
                    <a className="btn btn-secondary" id="github" href="https://github.com/saaqebs/wallpaper-updater-macos" role="button">github</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
