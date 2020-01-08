import React, { Component } from 'react';

import './styles/projects.scss'

class Projects extends Component {

  render() {
    return (
      <div className="wrapper">
        <h1 className="handiwork"> Some of my handiwork. </h1>
        <div className="portfolio">
          <div>
            <ul className="cards">

              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--fence"></div>
                  <div className="card__content">
                    <div className="card__title">Flex</div>
                    <p className="card__text">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional. Default is 0 1
                      auto.
                    </p>
                    <button className="btn btn--block card__btn">Button</button>
                  </div>
                </div>
              </li>

              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--fence"></div>
                  <div className="card__content">
                    <div className="card__title">Flex</div>
                    <p className="card__text">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional. Default is 0 1
                      auto.
                    </p>
                    <button className="btn btn--block card__btn">Button</button>
                  </div>
                </div>
              </li>

              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--fence"></div>
                  <div className="card__content">
                    <div className="card__title">Flex</div>
                    <p className="card__text">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional. Default is 0 1
                      auto.
                    </p>
                    <button className="btn btn--block card__btn">Button</button>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
