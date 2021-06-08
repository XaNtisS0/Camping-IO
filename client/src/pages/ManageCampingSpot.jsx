import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { Button, CssBaseline, TextField, Grid, Typography, makeStyles, Container } from "@material-ui/core";
import Camping from "../components/camping/Camping";
import { useAuth } from "../components/auth/context/AuthContext";
import CampingSpots from "../components/landing/CampingSpots";

const ManageCampingSpot = () => {
  const [campingsSpot, setCampingsSpot] = useState([]);
  const [filteredCampingsSpot, setfilteredCampingsSpot] = useState([]);
  const { campingID } = useParams();
  console.log(campingID);

  useEffect(() => {
    fetch("http://localhost:5000/api/campingspots")
      .then((res) => res.json())
      .then(
        (result) => {
          setCampingsSpot(result.data);
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  return (
    <>
      <h1>Hey</h1>
    </>
  );
};

export default ManageCampingSpot;
