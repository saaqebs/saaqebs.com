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
                Hello, my name is Saaqeb! I am currently a Software Engineer at Lyft. 
                I love creating interactive software and analyzing big data.<br></br>
                Take a look at some of my projects below!
              </p>

              <div className={buttonStyle.button_position}>
                <section id={buttonStyle.section03} className={buttonStyle.demo}>
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
