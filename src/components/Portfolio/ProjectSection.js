import React from "react";
import { Link } from "react-router-dom";
import "./ProjectSection.css";

export default function Portfolio(props) {
  return (
    <div className="wrap-project">
      <div className="wrap-img-title">
        <div className="project-title">{props.title}</div>
        <Link to={props.id}>
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
        </Link>
      </div>
      <div className="description-of-project">
        <div>{props.description}</div>
        {/* Add fix for external links. React was redirecting all the links to the home page */}
        <a
          href={`https://${props.link}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="link-portfolio">Visit Page</div>
        </a>
      </div>
    </div>
  );
}
