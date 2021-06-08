import React from "react";
import { Switch, Route } from "react-router-dom";
import Campings from "../../pages/Campings";
import Landing from "../../pages/Landing";
import Login from "../../pages/SignIn";
import Register from "../../pages/SignUp";
import CampingForm from "../../pages/CampingForm";
import CampingSpotForm from "../../pages/CampingSpotForm";
import ManageCampings from "../../pages/ManageCampings";
import ManageCampingSpot from "../../pages/ManageCampingSpot";
import CampingSpot from "../../pages/CampingSpotForm";
import Reservation from "../../pages/Reservation";

import PrivateRoute from "./PrivateRoute";

const Routes = () => (
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
    <Route exact path="/campings">
      <Campings />
    </Route>
    <PrivateRoute path="/campings/form/camping" component={CampingForm} />
    <PrivateRoute path="/campings/form/campingspot" component={CampingSpotForm} />
    <PrivateRoute path="/reservation/:id" component={Reservation} />
    <PrivateRoute exact path="/mycampings/" component={ManageCampings} />
    <PrivateRoute path="/mycampings/:campingID" component={ManageCampingSpot} />
  </Switch>
);

export default Routes;
