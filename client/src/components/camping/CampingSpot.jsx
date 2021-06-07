import React from "react";
import { Grid, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  campingSpot: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}));

const CampingSpot = ({ campingSpot }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
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
  );
};

export default CampingSpot;
