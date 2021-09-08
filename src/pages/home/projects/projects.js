import React, { PureComponent } from 'react';
import Projects from './projectCard.js'

import projectList from './data/descriptions.js'

import './styles/projects.scss'

class ProjectsPage extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <h1 className="handiwork"> Some of my handiwork. </h1>
        <div className="portfolio" id="portfolio">
          <div>
            <Projects projects={projectList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
