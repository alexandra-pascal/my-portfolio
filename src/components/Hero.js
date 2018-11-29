import React from "react";
import Header from "./Header";
import logo from "../img/logo.png";
import arrow from "../img/arrow.png";
import heroPicture from "../img/heroPicture.jpg";
import "../css/header.css";
import "../css/hero.css";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      title: `Hi. I'm Alex`,
      subtile: "Designer & Front-end Developer",
      smallSubtitle: "love to design and code beautiful applications",
      image: heroPicture
    };
  }

  render() {
    return (
      <div className="wrap-hero">
        <Header image={logo} alt="logo" />
        <div className="hero">
          <div className="left">
            <div className="the-text">
              <p className="title">{this.state.title},</p>
              <p className="subtitle">{this.state.subtile}</p>
              <p className="subtitle2">{this.state.smallSubtitle}</p>
              <img src={arrow} className="arrow" alt="pic" />
            </div>
          </div>
          <div className="right">
            <img src={heroPicture} className="heroPicture" alt="heroPicture" />
          </div>
        </div>
      </div>
    );
  }
}
