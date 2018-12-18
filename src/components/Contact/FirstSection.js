import React from "react";
import Background from "./../../img/background.jpg";
import Button from "./../Button/Button";
import WhiteLine from "./../WhiteLine/WhiteLine";
import "./FirstSection.css";

export default function FirstSection() {
  return (
    <div className="first-section-wrap">
      <img src={Background} alt="hero-mobile" className="backgroung-contact"/>
      <div className="wrap-text-button">
        <p className="contact-big-title">Contact</p>
        <p className="contact-title">Contact me</p>
        <div className="wrap-line-contact">
          <WhiteLine />
        </div>
        <p className="contact-text">
          Let's build something together. Feel free to reach out by email. Have a project you would like to discuss?
        </p>
        <a href="mailto:alexandra.pascal88@yahoo.com">
          <Button buttonText="Get in touch" />
        </a>
      </div>
    </div>
  );
}
