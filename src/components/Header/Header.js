import React from "react";
import { Link, NavLink } from "react-router-dom";
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
      <nav>
        <ul>
          <li >
            <NavLink  activeClassName="active" to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          </li>
          <div class="underbar"></div>
        </ul>
      </nav>
    </header>
  );
}
