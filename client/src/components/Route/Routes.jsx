import React from "react";
import { Switch, Route } from "react-router-dom";
import Campings from "../../pages/Campings";
import Landing from "../../pages/Landing";
import Login from "../../pages/SignIn";
import Register from "../../pages/SignUp";
import CampingForm from "../../pages/CampingForm";
import CampingSpot from "../../pages/CampingSpotForm";
import { AuthProvider } from "../auth/context/AuthContext";
import PrivateRoute from "./PrivateRoute";

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
      <Route path="/camping">
        <Register />
      </Route>
      <PrivateRoute path="/campings" exact component={Campings} />
      <PrivateRoute path="/campings/form" component={CampingForm} />
      <PrivateRoute path="/campingspot/form" component={CampingSpot} />
    </Switch>
  </AuthProvider>
);

export default Routes;
