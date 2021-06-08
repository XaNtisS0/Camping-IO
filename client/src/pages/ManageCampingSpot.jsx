import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CampingSpots from "../components/camping/CampingSpot";
import { Button, makeStyles, Container } from "@material-ui/core";

const ManageCampingSpot = () => {
  const [campingsSpot, setCampingsSpot] = useState([]);
  const [campings, setCampings] = useState([]);
  const [filteredCampingsSpot, setfilteredCampingsSpot] = useState([]);
  const { campingID } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/api/campingspots")
      .then((res) => res.json())
      .then(
        (result) => {
          setCampingsSpot(result.data);
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  useEffect(() => {
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
    const filtered = filteredCampingsSpot.filter((filteredCampingsSpot) => {
      console.log(filteredCampingsSpot.camping);
      console.log(campings._id);
      return filteredCampingsSpot.camping === campingID;
    });
    setfilteredCampingsSpot(campings);
    console.log(filtered);
  }, []);

  return (
    <>
      <Container omponent="main" maxWidth="xs">
        {filteredCampingsSpot.map((campingSpot) => {
          <CampingSpots campingSpot={campingSpot} key={campingSpot._id} />;
        })}
        <Button variant="contained" color="primary" href="/campings/form/campingspot">
          Add new camping spot
        </Button>
      </Container>
    </>
  );
};

export default ManageCampingSpot;
