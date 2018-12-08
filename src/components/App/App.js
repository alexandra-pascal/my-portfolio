import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Toolbar from "./../Toolbar/Toolbar";
import Footer from "./../Footer/Footer";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar />
          <main className="main">
            <p>My portfolio</p>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
