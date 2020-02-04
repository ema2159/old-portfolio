import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutMe from "./AboutMe.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";

// Main routing component
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={AboutMe} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  );
};

export default Main;
