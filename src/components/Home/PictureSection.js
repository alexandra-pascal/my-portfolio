import React from "react";
import MainPicture from "./../../img/me-red2.jpg";
import WhiteLine from "./../WhiteLine/WhiteLine";
import "./PictureSection.css";

export default function PictureSection() {
  return (
    <div className="picture-section-wrap">
      <img src={MainPicture} alt="Alexandra Pascal" />
      <div className="wrap-hello">
        <p className="hello">Hello</p>
        <WhiteLine />
        <p className="hello-subtitle">I'm Alex. Nice to meet you</p>
      </div>
    </div>
  );
}
