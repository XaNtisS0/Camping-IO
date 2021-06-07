import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const CampingSpots = ({ campingSpots }) => {
  const classes = useStyles();

  const cards = [1, 2, 3, 4];

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>The best place to store all Your camping spots</h1>
      <Container className={classes.cardGrid}>
        <Grid container spacing={3}>
          {campingSpots.map((campingSpot) => (
            <Grid item key={campingSpot._id} xs={12} sm={6} md={3}>
              <Card className={classes.campingSpot}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {campingSpot.name}
                  </Typography>
                  <Typography>Max guests: {campingSpot.guestsLimit}</Typography>
                  <Typography>Price: {campingSpot.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small" color="primary">
                    Reserve now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default CampingSpots;
