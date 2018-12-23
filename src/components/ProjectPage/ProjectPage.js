import React from "react";
import Projects from "./../../data/dataPortfolio";

export default class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = { project: {} };
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
          <div className="img">
            <picture>
              <source
                media="(min-width: 500px)"
                srcSet={project3.imgBig}
                type="image/jpg"
              />
              <img src={project3.imgSmall} alt="project" />
            </picture>
          </div>
        </div>
        <div className="second-section-project">
        </div>
      </div>
    );
  }
}
