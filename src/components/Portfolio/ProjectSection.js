import React from "react";
import "./ProjectSection.css";

export default function Portfolio(props) {
  return (
    <div className="wrap-project">
      <div className="wrap-img-title">
        <div className="project-title">{props.title}</div>
        <div className="wrap-image-project">
          <img src={props.image} alt="project" />
        </div>
      </div>
      <div className="description-of-project">{props.description}</div>
    </div>
  );
}
