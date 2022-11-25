import React, { PureComponent } from 'react';

import styles from './styles/homepage.module.scss';
import greece_propic from './images/greece.png'

class Background extends PureComponent {

  render() {
    return (
      <div className={styles.homepage}>
        <div className={styles.propic}>
          <img src={greece_propic} alt="" />
        </div>
      </div>
    );
  }
}

export default Background;
