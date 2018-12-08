import React from "react";
import { HashRouter as Router } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <p>My portfolio</p>
        </div>
      </Router>
    );
  }
}
