import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const classes = useStyles();
  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
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
          Zaloguj sie
        </Typography>
        {error && (
          <Grid item xs={12}>
            <Alert variant="filled" severity="error" width="100%">
              {error}
            </Alert>
          </Grid>
        )}
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Hasło"
            type="password"
            id="password"
            inputRef={passwordRef}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Zaloguj się
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register">Nie masz konta? Zarejestruj się!</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
