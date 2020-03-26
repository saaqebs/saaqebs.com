import React, { Component } from 'react';
import Helmet from 'react-helmet';

import styles from './homepage.module.css';

import Intro from './opening/intro';
import Background from './opening/background';
import Sidebar from './contact/sidebar';
import ProjectsPage from './projects/projects';
import Contact from './contact/contact';

const saaqeb = "Saaqeb Siddiqi is a developer and designer studying at Cornell University. You can find more information about him including his portfolio here.";
const propic = process.env.PUBLIC_URL + "/pic/intro.jpg"

function Head(props) {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>Saaqeb Siddiqi</title>
      <meta name="title" content="Saaqeb Siddiqi" />
      <meta name="description" content={saaqeb} />
    </Helmet>
  );
}

class Homepage extends Component {
  render() {
    return (
      <div>
        <Head />
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
