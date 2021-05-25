const express = require("express");
const cors = require("cors");

const initMongoConnection = require("./db/connection");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("I'm alive");
});

const runApp = async (app) => {
  await initMongoConnection();
  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
};

runApp(app);
