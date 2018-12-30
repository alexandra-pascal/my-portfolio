import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Routes from "./../Routes";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Header />
            <main>
              <Routes />
            </main>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}
