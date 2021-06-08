import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CampingSpot from "./CampingSpot";
import { useAuth } from "../auth/context/AuthContext";

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

const Camping = ({ camping }) => {
  const classes = useStyles();
  const { currentUser } = useAuth();

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>{camping.name}</h1>
      <Container className={classes.cardGrid}>
        <Grid container spacing={3}>
          {camping.campingSpots &&
            camping.campingSpots.map((campingSpot) => (
              <CampingSpot
                isOwner={campingSpot.owner === currentUser._id}
                campingSpot={campingSpot}
                key={campingSpot._id}
              />
            ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Camping;
