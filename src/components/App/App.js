import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SectionsContainer, Section, Header, Footer } from "react-fullpage";
import ScrollToTop from "react-router-scroll-top";
import Routes from "./../Routes";
import Home from "./../Home/Home";
import Contact from "./../Contact/Contact";
import Skills from "./../Skills/Skills";
import Portfolio from "./../Portfolio/Portfolio";
import "./App.css";

export default class App extends React.Component {
  render() {
    let options = {
      activeClass: "active",
      anchors: ["home", "portfolio", "skills", "contact"],
      arrowNavigation: true,
      className: "SectionContainer",
      delay: 1000,
      navigation: true,
      scrollBar: false,
      sectionClassName: "Section",
      sectionPaddingTop: "0",
      sectionPaddingBottom: "0",
      verticalAlign: false
    };
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div className="App">
            <Header>
              <a href="#home">Home</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </Header>
            <main>
              <SectionsContainer className="container" {...options}>
                <Section
                  className="custom-section"
                  verticalAlign="true"
                  color="#69D2E7"
                >
                  <Home />
                </Section>
                <Section
                  className="custom-section"
                  verticalAlign="true"
                  color="#A7DBD8"
                >
                  <Portfolio />
                </Section>
                <Section
                  className="custom-section"
                  verticalAlign="true"
                  color="#E0E4CC"
                >
                  <Skills />
                </Section>
                <Section
                  className="custom-section"
                  verticalAlign="true"
                  color="red"
                >
                  <Contact />
                </Section>
              </SectionsContainer>
              <Routes />
            </main>
            <Footer>footer</Footer>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}
