import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../components/auth/context/AuthContext";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  makeStyles,
  Container,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
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

const Reservation = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const classes = useStyles();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const [isVip, setIsVip] = useState(false);
  const isVipRef = useRef();
  const guestsRef = useRef();
  const [campingSpot, setCampingSpot] = useState(null);

  const toggleChecked = () => {
    setIsVip((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/campingSpots/${id}`)
      .then((res) => setCampingSpot(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/campingSpots", {
        userId: currentUser._id,
        campingSpot: campingSpot._id,
        startDate: startDateRef.current.value,
        endDate: endDateRef.current.value,
        isVip: isVipRef.current.value,
        guests: guestsRef.curret.value,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {campingSpot && (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Reserve {campingSpot.name}
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
                    inputRef={startDateRef}
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
                    inputRef={endDateRef}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Switch color="primary" checked={isVip} onChange={toggleChecked} />}
                    label="VIP"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: campingSpot.guestsLimit } }}
                    name="Guests"
                    label="Guests"
                    id="Guests"
                    inputRef={guestsRef}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Add camping spot
              </Button>
            </form>
          </div>
        </Container>
      )}
    </>
  );
};

export default Reservation;
