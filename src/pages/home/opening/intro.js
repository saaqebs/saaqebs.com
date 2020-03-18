import React, { Component } from 'react';

import './styles/intro.scss';
import './styles/button.css';

class Intro extends Component {
  render() {
    return (
      <div className="container">
        <div className="intro">

          <h1> Saaqeb Siddiqi </h1>
          <h2 className="noselect"> Developer. Designer. Teacher. </h2>
          <div className="info-container">

            <div className="info-second-container">
              <p className="noselect">
                Hello, my name is Saaqeb! I am a junior at
                Cornell studying Information Science. I like
                designing and analyzing all sorts of software applications.
              </p>
              <p> Take a look at some of my projects below! </p>

              <div className="button-position ">
                <section id="section03" className="demo">
                  <a href="#portfolio"><span />Scroll</a>
                </section>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
