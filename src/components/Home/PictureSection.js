import React from "react";
import MainPicture from './../../img/me-green.jpg';
import "./PictureSection.css";

export default function PictureSection() {
  return (
    <div className="picture-section-wrap">
      <img src={MainPicture} alt="Alexandra Pascal"/>
    </div>
  );
}
