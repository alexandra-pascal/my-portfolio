import React from "react";
import "./Footer.css";

export default function Toolbar(props) {
  return (
    <div className="footer">
      <div className="footer-icons">
        <i className="fa fa-github" />
        <i className="fa fa-linkedin" />
        <i className="fa fa-behance" />
      </div>
      <p>©Handcrafted by me | All rights reserved</p>
    </div>
  );
}
