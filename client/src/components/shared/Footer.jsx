import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link target="_blank" color="inherit" href="https://material-ui.com/">
          Camping Spot
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link target="_blank" color="inherit" href="https://www.freepik.com/vectors/forest">
          Forest vector created by dgim-studio - www.freepik.com
        </Link>{" "}
      </Typography>
    </>
  );
}

const Footer = () => {
  return (
    <Box mt={8} mb={4}>
      <Copyright />
    </Box>
  );
};

export default Footer;
