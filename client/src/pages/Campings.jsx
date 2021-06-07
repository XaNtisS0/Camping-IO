import React, { useState, useEffect } from "react";
import Camping from "../components/camping/Camping";

const Campings = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [campingSpots, setCampingSpots] = useState([]);
  const [campings, setCampings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/campingspots")
      .then((res) => res.json())
      .then(
        (result) => {
          setCampingSpots(result.data);
        },
        (error) => {
          console.log(error);
        },
      );
    fetch("http://localhost:5000/api/campings")
      .then((res) => res.json())
      .then(
        (result) => {
          setCampings(result.data);
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  useEffect(() => {
    if (campingSpots.length && campings.length) {
      campings.map((camping) => {
        camping.campingSpots = campingSpots.filter((campingSpot) => camping._id === campingSpot.camping);
      });
      setIsLoaded(true);
      setCampings(campings);
    }
  }, [campingSpots, campings]);

  return (
    <>
      {campings.map((camping) => (
        <Camping camping={camping} key={camping._id} />
      ))}
    </>
  );
};

export default Campings;
