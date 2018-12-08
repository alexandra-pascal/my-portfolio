import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import Portfolio from "./Portfolio/Portfolio";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import Contact from "./Contact/Contact";

export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/languages" component={Languages} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio-page" component={PortfolioPage} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}
