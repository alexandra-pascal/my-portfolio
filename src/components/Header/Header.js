import React from "react";
import { Link } from "react-router-dom";
// import { slide as Menu } from "react-burger-menu";
import Logo from "./../../img/logo.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
      {/* <Menu right>
          <a href="/" className="menu-link">
            Home
          </a>
          <a href="/portfolio" className="menu-link">
            Portfolio
          </a>
          <a href="/skills" className="menu-link">
            Skills
          </a>
          <a href="/contact" className="menu-link">
            Contact
          </a>
        </Menu> */}
    </header>
  );
}
