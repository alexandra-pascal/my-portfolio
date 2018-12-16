import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import ProjectPage from "./ProjectPage/ProjectPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/languages" component={Languages} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/:coverId" component={ProjectPage} />
      </Switch>
    </div>
  );
}
