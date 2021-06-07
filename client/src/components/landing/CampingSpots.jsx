import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CampingSpot from "../camping/CampingSpot";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "5rem auto",
  },
  header: {
    textAlign: "center",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  campingSpot: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}));

const CampingSpots = ({ campingSpots, isLoading }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>The best place to store all Your camping spots</h1>
      <Container className={classes.cardGrid}>
        {isLoading && (
          <Grid container spacing={3}>
            {campingSpots.map((campingSpot) => (
              <CampingSpot campingSpot={campingSpot} key={campingSpot._id} />
            ))}
          </Grid>
        )}
      </Container>
    </Container>
  );
};

export default CampingSpots;
