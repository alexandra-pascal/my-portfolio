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
  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler}/>;
    }
    return (
      <Router>
        <div className="App">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
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
