import React from "react";
import "./SecondSection.css";

export default function SecondSection() {
  return (
    <div className="second-section-wrap">
      <div className="wrap-content">
        <div className="wrap-icon-text">
          <i className="fa fa-location-arrow" />
          <p className="txt london">London</p>
        </div>
        <div className="wrap-icon-text">
          <i className="fa fa-at" />
          <p className="txt">alexandra.pascal88@yahoo.com</p>
        </div>
      </div>
    </div>
  );
}
