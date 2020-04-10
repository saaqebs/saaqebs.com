import React, { Component } from 'react';
import Helmet from 'react-helmet';

import styles from './homepage.module.css';

import Intro from './opening/intro';
import Background from './opening/background';
import Sidebar from './contact/sidebar';
import ProjectsPage from './projects/projects';
import Contact from './contact/contact';

const desc = "Saaqeb Siddiqi is a developer and designer studying at Cornell University. You can find more information about him including his portfolio here.";
// const propic = "https://raw.githubusercontent.com/saaqebs/saaqebs.com/45e321abaed408f87f1e99ecab7d2dd7b8d66d69/pic/intro.jpg"

function Head(props) {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>Saaqeb Siddiqi</title>
      <meta name="title" content="Saaqeb Siddiqi" />
      <meta name="description" content={desc} />

      {/* <!-- Open Graph / Facebook --> */}
      {/* <meta property="og:title"         content="Saaqeb Siddiqi" />
      <meta property="og:url"           content="https://saaqebs.com/" />
      <meta property="og:image"         content={propic} />
      <meta property="og:description"   content={desc} /> */}

      {/* <!-- Twitter --> */}
      {/* <meta property="twitter:title"        content="Saaqeb Siddiqi" />
      <meta property="twitter:url"          content="https://saaqebs.com/" />
      <meta property="twitter:image"        content={propic} />
      <meta property="twitter:description"  content={desc} /> */}
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
