import React, { Component } from 'react';
import Helmet from 'react-helmet';

import styles from './homepage.module.css';

import Intro from './opening/intro';
import Background from './opening/background';
import Sidebar from './contact/sidebar';
import ProjectsPage from './projects/projects';
import Contact from './contact/contact';

const desc = "Saaqeb Siddiqi is a software engineer at Meta in Seattle, working on reinforcement learning and multilingual AI agent evaluation. Previously at Microsoft, Peloton, and Lyft. BS in Information Science from Cornell.";
// const propic = "https://raw.githubusercontent.com/saaqebs/saaqebs.com/d44120923561a485b8b9b09db74e6f9a74a3b173/public/pic/intro.jpeg"

function Head(props) {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>Saaqeb Siddiqi | Software Engineer at Meta</title>
      <meta name="title" content="Saaqeb Siddiqi | Software Engineer at Meta" />
      <meta name="description" content={desc} />

      {/* <!-- Open Graph / Facebook --> */}
      {/* <meta property="og:title"         content="Saaqeb" />
      <meta property="og:url"           content="https://saaqebs.com/" />
      <meta property="og:image"         content={propic} />
      <meta property="og:description"   content={desc} /> */}

      {/* <!-- Twitter --> */}
      {/* <meta property="twitter:title"        content="Saaqeb" />
      <meta property="twitter:url"          content="https://saaqebs.com/" />
      <meta property="twitter:image"        content={propic} />
      <meta property="twitter:description"  content={desc} /> */}
    </Helmet>
  );
}

function About() {
  return (
    <section aria-label="About" style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 20px' }}>
      <h2>About</h2>
      <p>Saaqeb Siddiqi is a software engineer at Meta in Seattle. He works in Applied AI on reinforcement learning and multilingual AI agent evaluation. Before Meta, he worked at Microsoft, Peloton, and Lyft. He studied Information Science and Computer Science at Cornell University.</p>
    </section>
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
          <About />
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
