import React from "react";
import { Link } from 'react-router-dom';
import DrawerToggleButton from "./../SideDrawer/DrawerToggleButton";
import Logo from "./../../img/logo.svg";
import "./Toolbar.css";

export default function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <Link to="/">
            <img src={Logo} alt="logo"/>
          </Link>
        </div>
        <div>
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
      </nav>
    </header>
  );
}
