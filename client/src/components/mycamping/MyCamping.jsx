import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "5rem auto",
  },
  header: {
    textAlign: "center",
  },
}));

const MyCamping = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>{camping.name}</h1>
      <h1 className={classes.header}>{camping.name}</h1>
      <h1 className={classes.header}>{camping.name}</h1>
    </Container>
  );
};

export default MyCamping;
