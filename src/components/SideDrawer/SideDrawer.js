import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

export default function SideDrawer(props) {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/skills" className="menu-link">Skills</Link>
        </li>
        <li>
          <Link to="/portfolio" className="menu-link">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className="menu-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
