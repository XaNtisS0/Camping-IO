import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../../pages/Landing";
import Login from "../../pages/SignIn";
import Register from "../../pages/SignUp";
import { AuthProvider } from "../context/AuthContext";
const Routes = () => (
  <AuthProvider>
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  </AuthProvider>
);

export default Routes;
