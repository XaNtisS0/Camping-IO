const mongoose = require("mongoose");

const connectionString = "mongodb://mongo:27017/FormCreator";

const initMongoConnection = async () => {
  try {
    await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("DB connection successful");
  } catch (err) {
    console.log("DB connection errror", err.message);
  }

  return mongoose.connection;
};

module.exports = initMongoConnection;
