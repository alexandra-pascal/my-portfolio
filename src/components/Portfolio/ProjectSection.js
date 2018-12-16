import React from "react";
import "./ProjectSection.css";

export default function Portfolio(props) {
  return (
    <div className="wrap-project">
      <div className="wrap-img-title">
        <div className="project-title">{props.title}</div>
        <div className="wrap-image-project">
          <picture>
            <source
              media="(min-width: 500px)"
              srcSet={props.imageBig}
              type="image/jpg"
            />
            <img src={props.imageSmall} alt="project" />
          </picture>
        </div>
      </div>
      <div className="description-of-project">{props.description}</div>
    </div>
  );
}
