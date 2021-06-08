import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  makeStyles,
  Container,
  Select,
  MenuItem,
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
const types = ["Nadmorski", "Górski", "Nadjeziorny"];

export const CampingForm = () => {
  const campingNameRef = useRef();
  const addressRef = useRef();
  const campingSpotLimitRef = useRef();
  const [type, setType] = useState(types[0]);
  const ownerRef = useRef();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/campings", {
        name: campingNameRef.current.value,
        address: addressRef.current.value,
        campingSpotLimit: campingSpotLimitRef.current.value,
        type: type,
        owner: ownerRef.current.value,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add camping
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
                label="Camping name"
                inputRef={campingNameRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                inputRef={addressRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="campingSpotLimit"
                label="Camping Spot Limit"
                id="campingSpotLimit"
                inputRef={campingSpotLimitRef}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                label="Type"
                value={type}
                default={types[0]}
                onChange={(e) => {
                  setType(e.target.value);
                }}
                required
              >
                {types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="owner"
                label="Owner"
                id="owner"
                inputRef={ownerRef}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Add camping
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CampingForm;
