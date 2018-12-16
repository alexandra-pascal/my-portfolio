import React from "react";
import Background from "./../../img/background.jpg";
import "./ProjectSection.css";

export default function Portfolio(props) {
  return (
    <div className="wrap-project">
    <img src={Background} alt="hero-mobile" className="backgroung-portfolio"/>
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
