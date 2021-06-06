import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#EEE9E3",
    minHeight: "100vh",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Navbar />
      {children}
    </main>
  );
};

export default Wrapper;
