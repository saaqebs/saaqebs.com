import React, { Component } from 'react';

import styles from './styles/homepage.module.scss';
import propic from './images/propic.png'

class Background extends Component {

  render() {
    return (
      <div className={styles.homepage}>
        <div className={styles.propic}>
          <img src={propic} alt="" />
        </div>
      </div>
    );
  }
}

export default Background;
