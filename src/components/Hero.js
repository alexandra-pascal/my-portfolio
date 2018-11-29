import React from "react";
import Header from "./Header";
import logo from "../img/logo.png";
import "../css/header.css";
import "../css/hero.css";

export default class Details extends React.Component {
  render() {
    return (
      <div className="wrap-hero">
        <Header image={logo} alt="logo" />
      </div>
    );
  }
}
