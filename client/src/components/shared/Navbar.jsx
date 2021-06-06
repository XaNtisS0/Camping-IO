import React from "react";
import logo from "../../images/logo.svg";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    maxHeight: "50px",
  },
  logo: {
    height: "100px",
    justifySelf: "flex-start",
  },
  button: {
    margin: "1em",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.navbar} component="navbar">
      <Link to="/">
        <img className={classes.logo} src={logo}></img>
      </Link>
      <div className={classes.buttons}>
        <Link to="/">
          <Button className={classes.button}>Home</Button>
        </Link>
        <Link>
          <Button className={classes.button}>Camping</Button>
        </Link>
        <Link to="/register">
          <Button className={classes.button} variant="contained" color="primary">
            Register
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
