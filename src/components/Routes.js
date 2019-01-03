import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import ProjectPage from "./ProjectPage/ProjectPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/:projectId" component={ProjectPage} />
      </Switch>
    </div>
  );
}
