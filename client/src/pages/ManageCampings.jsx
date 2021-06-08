import React, { useState, useEffect } from "react";

import { Button, CssBaseline, TextField, Grid, Typography, makeStyles, Container } from "@material-ui/core";
import Camping from "../components/camping/Camping";
import { useAuth } from "../components/auth/context/AuthContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ManageCampings = () => {
  const classes = useStyles();
  const [campings, setCampings] = useState([]);
  const [filteredCampings, setfilteredCampings] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/api/campings")
      .then((res) => res.json())
      .then(
        (result) => {
          setCampings(result.data);
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  useEffect(() => {
    const filtered = campings.filter((camping) => {
      return camping.owner === currentUser._id;
    });
    setfilteredCampings(filtered);
    console.log(filteredCampings);
  }, [campings]);

  return (
    <>
      <Container omponent="main" maxWidth="xs">
        {filteredCampings.map((filteredCamping) => (
          <Camping camping={filteredCamping} key={filteredCamping._id} />
        ))}
      </Container>
    </>
  );
};

export default ManageCampings;
