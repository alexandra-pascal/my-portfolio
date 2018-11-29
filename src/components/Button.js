import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

export default function Button(props) {
  return (
    <div>
      <Link to="/portfolio">
        <button className="button">Visit my portfolio</button>
      </Link>
    </div>
  );
}
