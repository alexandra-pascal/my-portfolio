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
        <Route exact path={`${process.env.PUBLIC_URL}/`}  component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/portfolio`}  component={Portfolio} />
        <Route path={`${process.env.PUBLIC_URL}/Skills`}  component={Skills} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
        <Route path={`${process.env.PUBLIC_URL}/projectId`} component={ProjectPage} />
      </Switch>
    </div>
  );
}
