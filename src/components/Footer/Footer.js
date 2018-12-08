import React from "react";
import "./Footer.css";

export default function Toolbar(props) {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://github.com/alexandra-pascal?tab=repositories" target="_blank" rel='noreferrer noopener'>
          <i className="fa fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/alexandra-pascal-7354b4127/" target="_blank" rel='noreferrer noopener'>
          <i className="fa fa-linkedin" />
        </a>
        <a href="https://www.behance.net/alexandrap6ffd" target="_blank" rel='noreferrer noopener'>
          <i className="fa fa-behance" />
        </a>
      </div>
      <p>©Handcrafted by me | All rights reserved</p>
    </div>
  );
}
