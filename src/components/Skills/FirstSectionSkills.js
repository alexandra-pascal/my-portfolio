import React from "react";
import Background from "./../../img/background.jpg";
import WhiteLine from "./../WhiteLine/WhiteLine";
import "./FirstSectionSkills.css";

export default function FirstSectionSkills() {
  return (
    <div className="first-section-skills-wrap">
      <img src={Background} alt="hero-mobile" className="backgroung-skills" />
      <div className="wrap-text-skills">
        <p className="big-title-skills">Love to design</p>
        <p className="title-skills">Love to design</p>
        <div className="wrap-line-skills">
          <WhiteLine />
        </div>
        <p className="item">UX /UI</p>
        <p className="item">Web</p>
        <p className="item">Mobile Applications</p>
      </div>
    </div>
  );
}
