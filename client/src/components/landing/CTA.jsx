import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../images/logo.svg";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "60vh",
    display: "flex",
    justifyContent: "space-between",
    margin: "5rem auto",
  },
  ctaText: {
    width: "50%",
  },
  smallText: {
    color: "#B3ACA2",
  },
  paragraph: {
    fontSize: "4em",
  },
  image: {
    height: "500px",
  },
}));

const CTA = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.ctaText}>
        <h3 className={classes.smallText}>DESIGN INSPIRATION</h3>
        <h2 className={classes.paragraph}>Add your camping to make it more manageable.</h2>
        <Button variant="contained" color="primary">
          Register now
        </Button>
      </div>
      <img className={classes.image} src={logo}></img>
    </Container>
  );
};

export default CTA;
