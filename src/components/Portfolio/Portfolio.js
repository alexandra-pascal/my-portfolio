import React from "react";
import ProjectSection from "./ProjectSection";
import "./Portfolio.css";
import Projects from "../../data/dataPortfolio";

export default function Portfolio() {
  return (
    <div>
      {Projects.map((project, index) => (
        <ProjectSection
          key={index}
          title={project.title}
          imageBig={project.imgBig}
          imageSmall={project.imgSmall}
          description={project.description.map((eachDescription, index) => (
            <li key={index} className="li-description">
              {eachDescription}
            </li>
          ))}
        />
      ))}
    </div>
  );
}
