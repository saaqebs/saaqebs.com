import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import styles from './homepage.module.css';

import Intro from './opening/intro';
import Background from './opening/background';
import Sidebar from './contact/sidebar';
import ProjectsPage from './projects/projects';
import Contact from './contact/contact';

const saaqeb = "Saaqeb Siddiqi is a developer and designer studying at Cornell University. You can find more information about him including his portfolio here.";

function Head(props) {
  return (
    <MetaTags>
      {/* <!-- Primary Meta Tags --> */}
      <title>Saaqeb Siddiqi</title>
      <meta name="title" content="Saaqeb Siddiqi" />
      <meta name="description" content={saaqeb} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://saaqebs.com/" />
      <meta property="og:title" content="Saaqeb Siddiqi" />
      <meta property="og:description" content={saaqeb} />
      <meta property="og:image" content="%PUBLIC_URL%/pic/intro.jpg" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://saaqebs.com/" />
      <meta property="twitter:title" content="Saaqeb Siddiqi" />
      <meta property="twitter:description" content={saaqeb} />
      <meta property="twitter:image" content="%PUBLIC_URL%/pic/intro.jpg" />
    </MetaTags>
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
