import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import AboutMe from './AboutMe.js';
import Resume from './Resume.js';
import WorkHistory from './WorkHistory.js';
import Projects from './Projects.js';

const Main = () => {
    return (
	<Switch>
          <Route exact path = '/' component={LandingPage}/>
          <Route path = '/AboutMe' component={AboutMe}/>
          <Route path = '/Resume' component={Resume}/>
          <Route path = '/Projects' component={Projects}/>
          <Route path = '/WorkHistory' component={WorkHistory}/>
	</Switch>
    );
}

export default Main;
