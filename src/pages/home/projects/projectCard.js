import React from "react";

class ProjectCard extends React.PureComponent {
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
           <Buttons buttons={this.props.project.buttons} />
          </div>
        </div>
      </li>
    );
  }
}


class Buttons extends React.Component {
  render () {
    return (
      <ul className="card__buttons">

        {this.props.buttons.map((button) =>
          <li> 
            <a className="git_link" href={button.link}>
              <button className="btn btn--block card__btn">
                {button.name}
              </button>
            </a>
          </li>
        )}

      </ul>
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
