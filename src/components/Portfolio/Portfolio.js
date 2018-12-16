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
          image={project.img}
          description={project.description}
        />
      ))}
    </div>
  );
}
