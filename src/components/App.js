import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import "../css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}
