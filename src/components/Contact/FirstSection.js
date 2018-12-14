import React from "react";
import Button from "./../Button/Button";
import "./FirstSection.css";

export default function FirstSection() {
  return (
    <div className="first-section-wrap">
      <div className="wrap-text-button">
        <p className="contact-title">Contact me</p>
        <p className="contact-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <a href="mailto:alexandra.pascal88@yahoo.com">
          <Button buttonText="Get in touch" />
        </a>
      </div>
    </div>
  );
}
