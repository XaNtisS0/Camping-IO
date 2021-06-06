import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "5rem auto",
  },
  header: {
    textAlign: "center",
  },
}));

const CampingSpots = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>The best place to store all Your camping spots</h1>
    </Container>
  );
};

export default CampingSpots;
