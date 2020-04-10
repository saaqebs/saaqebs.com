import React from "react";

class ProjectCard extends React.Component {
  render() {
    // const image = this.props.project.image;
    // const image = require(this.props.project.image);
    return (
      <li className="cards__item">
        <div className="card">
          <div className="card__image"
            style={{ backgroundImage: `url(${this.props.project.image})` }} />
          <div className="card__content">
            <div className="card__title">
              {this.props.project.name}
            </div>
            <p className="card__text">
              {this.props.project.description}
            </p>
            <a className="git_link" href={this.props.project.github}>
              <button className="btn btn--block card__btn">
                Github
              </button>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

class Projects extends React.Component {
  render() {
    // console.log(this.props.projects[0]);
    return (
      <ul className="cards">
        {this.props.projects.map((project) =>
          <ProjectCard project={project} key={project.id} />
        )}
      </ul>
    );
  }
}

export default Projects;
