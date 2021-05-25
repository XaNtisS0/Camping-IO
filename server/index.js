const express = require("express");
const cors = require("cors");

const campingRouter = require("./routes/camping-router");
const campingSpotRouter = require("./routes/campingSpot-router");
const reservationRouter = require("./routes/reservation-router");
const userRouter = require("./routes/user-router");

const initMongoConnection = require("./db/connection");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/campings", campingRouter);
app.use("/api/campingSpots", campingSpotRouter);
app.use("/api/reservations", reservationRouter);

const runApp = async (app) => {
  await initMongoConnection();
  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
};

runApp(app);
