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
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
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
  const [isVip, setIsVip] = useState(false);
  const [guests, setGuests] = useState(0);
  const [campingSpot, setCampingSpot] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleGuestsChange = (e) => {
    console.log(e.target.value);
    setGuests(e.target.value);
  };

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
    console.log(guests);
    axios
      .post("http://localhost:5000/api/reservations", {
        userId: currentUser._id,
        campingSpot: campingSpot._id,
        startDate: startDate,
        endDate: endDate,
        isVip: isVip,
        guests: guests,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {campingSpot && (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Reserve {campingSpot.name}
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <KeyboardDatePicker
                      required
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Start Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <KeyboardDatePicker
                      required
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="End Date"
                      value={endDate}
                      onChange={handleEndDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
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
                      value={guests}
                      onChange={handleGuestsChange}
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  Add camping spot
                </Button>
              </form>
            </div>
          </Container>
        </MuiPickersUtilsProvider>
      )}
    </>
  );
};

export default Reservation;
