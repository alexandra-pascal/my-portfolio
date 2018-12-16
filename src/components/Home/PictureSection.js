import React from "react";
import { Link } from "react-router-dom";
import MainPicture from "./../../img/me.jpg";
import MainPictureMob from "./../../img/me-mob.jpg";
import WhiteLine from "./../WhiteLine/WhiteLine";
import Button from "./../Button/Button";
import "./PictureSection.css";

export default function PictureSection() {
  return (
    <div className="picture-section-wrap">
      <picture>
         <source
          media="(min-width: 1200px)"
          srcSet={MainPicture}
          type="image/jpg"
        />
        <img src={MainPictureMob} alt="hero-mobile" />
      </picture>
      <div className="wrap-hello">
        <p className="hello"> &lt;Hello/&gt; </p>
        <WhiteLine />
        <p className="hello-subtitle">I'm Alex. Nice to meet you</p>
        <Link to="/portfolio">
          <Button buttonText="See my work" />
        </Link>
      </div>
    </div>
  );
}
