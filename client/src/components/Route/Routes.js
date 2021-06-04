import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../pages/signin";
import Register from "../../pages/signup";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      {/* <Landing /> */}
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </Switch>
);

export default Routes;
