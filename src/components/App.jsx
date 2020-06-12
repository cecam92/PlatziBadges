import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import Badgenew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'

import Layout from "./Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={Badgenew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
