const mongoose = require("mongoose");

const CampingSchema = new mongoose.Schema({
  campingSpotId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  campingSpotLimit: {
    type: Number,
    required: [true, "Camping Spot Limit is required"],
    min: 1,
  },
  type: {
    type: String,
    enum: ["Nadmorski", "Górski", "Nadjeziorny"],
    required: [true, "Type is required"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Owner is required"],
  },
});

module.exports = mongoose.model("Campings", CampingSchema);
