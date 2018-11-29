import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio(props) {
  return (
    <div className="wrap-portfolio">
      <h1>Portfolio</h1>
      <Link to="/">
        <button>Back to home page</button>
      </Link>
    </div>
  );
}
