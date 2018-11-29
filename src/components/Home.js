import React from "react";
import Hero from "./Hero";
import Description from "./Description";
import Button from "./Button";
import "../css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Description />
        <Button />
      </div>
    );
  }
}
