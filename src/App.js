
import React from 'react';

// import css file from scss
import './styles/styles.css'
import './styles/homepage.scss';
import './styles/projects.scss'
import './styles/intro.scss'
import './styles/button.css'

import Intro from './components/pieces/intro';
import Homepage from './components/content/homepage';
import Sidebar from './components/pieces/sidebar';
import Projects from './components/content/projects'
import Contact from './components/content/contact'

function App() {
  return (
    <div>
      <div>
        <Sidebar />
        <div>
          <Intro />
          <Homepage />
        </div>
        <div>
          <h1 id="port"> Some of my handiwork. </h1>
          <Projects id="portfolio" />
        </div>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
