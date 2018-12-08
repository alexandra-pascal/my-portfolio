import React from "react";
import "./Toolbar.css";

export default function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <a href="/">LOGO</a>
        </div>
        <div className="DrawerToggleButton" />
      </nav>
    </header>
  );
}
