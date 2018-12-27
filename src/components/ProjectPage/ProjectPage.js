import React from "react";
import Projects from "./../../data/dataPortfolio";
import "./ProjectPage.css";

export default class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {
        projectDescription: []
      }
    };
  }

  componentDidMount() {
    let projectData = Projects.find(
      project => project.id === this.props.match.params.coverId
    );
    this.setState({ project: projectData });
  }

  render() {
    let project3 = this.state.project;
    return (
      <div className="wrap-project">
        <div className="first-section-project">
          <div className="project-title2">Gentle Dental Care</div>
          <div className="img">
            <img src={project3.mockupMob} alt="project" />
          </div>

          <div className="project-description">
            {project3.projectDescription.map((eachDescription, index) => (
              <li key={index} className="li-description">
                {eachDescription}
              </li>
            ))}
          </div>
        </div>
        <div className="second-section-project"></div>
      </div>
    );
  }
}
