import React from "react";
import Projects from "./../../data/dataPortfolio";
import "./ProjectPage.css";

export default class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {
        projectDescription: [],
        desktopDescription: []
      }
    };
  }

  componentDidMount() {
    let projectData = Projects.find(
      project => project.id === this.props.match.params.projectId
    );
    this.setState({ project: projectData });
  }

  render() {
    let project3 = this.state.project;
    return (
      <div>
        <div className="wrap-project">
          <div className="first-section-project">
            <div className="mob-mockup">
              <div className="project-title2">{project3.title}</div>
              <div className="img">
                <img src={project3.mockupMob} alt="project" />
              </div>
              <div className="project-description">
                {project3.projectDescription.map((eachDescription, index) => (
                  <li key={index}>{eachDescription}</li>
                ))}
              </div>
            </div>
          </div>
          <div className="second-section-project" />
        </div>
        <div className="wrap-project-desktop">
          <div className="first-section-project">
            <div className="mob-mockup">
              <div className="img-desktop">
                <img src={project3.mockupDesk} alt="project" />
              </div>
            </div>
          </div>
          <div className="second-section-project">
            <div className="description">
              {project3.desktopDescription.map((eachDescription, index) => (
                <ul key={index}>
                  <li>{eachDescription}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
