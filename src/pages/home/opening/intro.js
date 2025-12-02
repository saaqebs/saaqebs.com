import React, { PureComponent } from 'react';

import styles from './styles/intro.module.scss';
import buttonStyle from './styles/button.module.css';

class Intro extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.intro}>

          <h1> Saaqeb Siddiqi </h1>
          <h2 className={styles.noselect}> Developer. Designer. Teacher. </h2>
          <div className={styles.info_container}>

            <div className={styles.info_second_container}>
              <p className="noselect">
                Welcome! I love creating interactive software & analyzing data.<br></br>
                Take a look at my projects below!
              </p>

              <div className={buttonStyle.button_position}>
                <section className={buttonStyle.demo}>
                  <a href="#portfolio" className="noselect"><span />Scroll</a>
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
