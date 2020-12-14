import React from "react";
import { Switch, Route } from "react-router-dom";
import { Products } from "./views/Products";
import { History } from "./views/History";

const Routes = () => (
  <Switch>
    <Route exact path="/history">
      <History />
    </Route>
    <Route path="/">
      <Products />
    </Route>
  </Switch>
);

export default Routes;
