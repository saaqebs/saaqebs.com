import React, { Component } from 'react';

import styles from './homepage.module.css';

import Intro from './opening/intro';
import Background from './opening/background';
import Sidebar from './contact/sidebar';
import ProjectsPage from './projects/projects';
import Contact from './contact/contact';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <Sidebar />
          <div className={styles.front}>
            <Intro />
            <Background />
          </div>
          <ProjectsPage />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    );
  }
}

export default Homepage;
