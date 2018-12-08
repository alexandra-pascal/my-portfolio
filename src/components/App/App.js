import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Toolbar from "../Toolbar/Toolbar";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar />
          <p>My portfolio</p>
        </div>
      </Router>
    );
  }
}
