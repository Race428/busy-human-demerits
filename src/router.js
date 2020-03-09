import React from "react";
import { Switch, Route } from "react-router-dom";
import Demerits from "./views/Demerits/demerits"
// import CreateStoryboard from './components/pages/create-storyboard/createStoryboard'

// import TakeAway from './components/pages/create-storyboard/TakeAway'

export default (
  <Switch>
    {/* landing page routes  */}
    <Route exact path="/" component={Demerits} />

  </Switch>
);

