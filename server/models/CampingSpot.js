const mongoose = require("mongoose");

const CampingSpotSchema = new mongoose.Schema({
  camping: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Camping",
    required: true,
  },
  name: {
    type: Number,
    required: [true, "Name is required"],
  },
  guestsLimit: {
    type: Number,
    required: [true, "Guests Limit is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  picture: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("CampingSpots", CampingSpotSchema);
