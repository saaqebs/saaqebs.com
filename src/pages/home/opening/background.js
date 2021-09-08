import React, { PureComponent } from 'react';

import styles from './styles/homepage.module.scss';
import propic from './images/propic.png'

class Background extends PureComponent {

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
