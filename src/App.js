
import React from 'react';
import Fade from 'react-reveal/Fade';

// import css file from scss
import './styles/styles.css';

import Intro from './components/homepage/intro';
import Homepage from './components/homepage/homepage';
import Sidebar from './components/contact/sidebar';
import ProjectsPage from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div>
      <div>
        <Sidebar />
        <div className="front">
          <Intro />
          <Homepage />
        </div>
        <ProjectsPage />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
