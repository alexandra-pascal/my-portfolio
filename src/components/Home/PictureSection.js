import React from "react";
import { Link } from "react-router-dom";
import MainPicture from "./../../img/me-green.jpg";
import WhiteLine from "./../WhiteLine/WhiteLine";
import Button from "./../Button/Button";
import "./PictureSection.css";

export default function PictureSection() {
  return (
    <div className="picture-section-wrap">
      <img src={MainPicture} alt="hero" />
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
