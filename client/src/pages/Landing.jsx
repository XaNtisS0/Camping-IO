import React, { useState, useEffect } from "react";
import CTA from "../components/landing/CTA";
import { CircularProgress } from "@material-ui/core";
import CampingSpots from "../components/landing/CampingSpots";

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [campingSpots, setCampingSpots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/campingspots")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCampingSpots(result.data);
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
        },
      );
  }, []);

  return (
    <>
      <CTA />
      {isLoaded ? <CampingSpots campingSpots={campingSpots.slice(0, 4)} /> : <CircularProgress />}
    </>
  );
};

export default Landing;
