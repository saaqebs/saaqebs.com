import React, { Component } from 'react';

import './styles/projects.scss'

class Projects extends Component {

  render() {
    return (
      <div className="wrapper">
        <h1 className="handiwork"> Some of my handiwork. </h1>
        <div className="portfolio">
          <div>
            <ul class="cards">

              <li class="cards__item">
                <div class="card">
                  <div class="card__image card__image--fence"></div>
                  <div class="card__content">
                    <div class="card__title">Flex</div>
                    <p class="card__text">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional. Default is 0 1
                      auto.
                    </p>
                    <button class="btn btn--block card__btn">Button</button>
                  </div>
                </div>
              </li>

              <li class="cards__item">
                <div class="card">
                  <div class="card__image card__image--fence"></div>
                  <div class="card__content">
                    <div class="card__title">Flex</div>
                    <p class="card__text">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional. Default is 0 1
                      auto.
                    </p>
                    <button class="btn btn--block card__btn">Button</button>
                  </div>
                </div>
              </li>

              <li class="cards__item">
                <div class="card">
                  <div class="card__image card__image--fence"></div>
                  <div class="card__content">
                    <div class="card__title">Flex</div>
                    <p class="card__text">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional. Default is 0 1
                      auto.
                    </p>
                    <button class="btn btn--block card__btn">Button</button>
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
