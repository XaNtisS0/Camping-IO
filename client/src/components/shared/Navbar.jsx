import React, { useContext } from "react";
import logo from "../../images/logo.svg";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../auth/context/AuthContext";

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
  const { currentUser } = useAuth();
  const classes = useStyles();
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className={classes.navbar} component="nav">
      <Link to="/">
        <img className={classes.logo} src={logo}></img>
      </Link>
      <div className={classes.buttons}>
        <Link to="/">
          <Button className={classes.button}>Home</Button>
        </Link>
        <Link to="/campings">
          <Button className={classes.button}>Campings</Button>
        </Link>
        {currentUser ? (
          <>
            {currentUser.isOwner && (
              <Link to="/mycampings">
                <Button className={classes.button}>My Camps</Button>
              </Link>
            )}
            <Link to="">
              <Button className={classes.button} variant="contained" color="primary" onClick={handleLogout}>
                Logout
              </Button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <Button className={classes.button} variant="contained" color="primary">
              Login
            </Button>
          </Link>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
