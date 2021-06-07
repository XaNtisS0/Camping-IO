import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Avatar, Button, CssBaseline, TextField, Grid, Typography, makeStyles, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

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

export default function SignUp() {
  const classes = useStyles();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setStatus(true);
      setError("Successfully registered.");
    } catch {
      setStatus(false);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Zarejestruj się
        </Typography>
        {status ? (
          <Grid item xs={12}>
            <Alert variant="filled" severity="success">
              {error}
            </Alert>
          </Grid>
        ) : (
          error && (
            <Grid item xs={12}>
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            </Grid>
          )
        )}
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Imie"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nazwisko"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                inputRef={emailRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Hasło"
                type="password"
                id="password"
                inputRef={passwordRef}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            Zarejestruj się
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Masz juz konto? Zaloguj się
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
