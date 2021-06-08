import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, CssBaseline, TextField, Grid, Typography, makeStyles, Container } from "@material-ui/core";
import axios from "axios";

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

export const CampingSpotForm = () => {
  const campingRef = useRef();
  const nameCampingSpotRef = useRef();
  const guestsLimitRef = useRef();
  const priceRef = useRef();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/campingSpots", {
        camping: campingRef.current.value,
        name: nameCampingSpotRef.current.value,
        guestsLimit: guestsLimitRef.current.value,
        price: priceRef.current.value,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add camping spot
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="nameCamping"
                variant="outlined"
                required
                fullWidth
                id="nameCamping"
                label="Camping ID"
                inputRef={campingRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nameCampingSpot"
                label="Camping Spot name"
                name="nameCampingSpot"
                inputRef={nameCampingSpotRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="guestsLimit"
                label="Guests Limit"
                id="guestsLimit"
                inputRef={guestsLimitRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="price"
                label="Price"
                id="price"
                inputRef={priceRef}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Add camping spot
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CampingSpotForm;
