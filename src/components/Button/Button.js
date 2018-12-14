import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
  return (
    <Link to="/portfolio">
      <button className="button">{props.buttonText}</button>
    </Link>
  );
}
