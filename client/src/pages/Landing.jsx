import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CTA from "../components/landing/CTA";
import CampingSpots from "../components/landing/CampingSpots";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#EEE9E3",
    minHeight: "100vh",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <>
      <CTA />
      <CampingSpots />
    </>
  );
};

export default Landing;
