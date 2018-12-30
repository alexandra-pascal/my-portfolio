import React from "react";
// import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Logo from "./../../img/logo.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
        <div className="header__logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <Menu right>
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
        </Menu>
    </header>
  );
}
