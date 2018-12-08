import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Toolbar from "./../Toolbar/Toolbar";
import Footer from "./../Footer/Footer";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import "./App.css";

export default class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    let sideDrawer;
    let backDrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop />;
    }
    return (
      <Router>
        <div className="App">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backDrop}
          <main className="main">
            <p>My portfolio</p>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
