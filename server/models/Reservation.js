const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  campingSpot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CampingSpot",
    required: [true, "Camping Spot is required"],
  },
  startDate: {
    type: Date,
    required: [true, "Start Date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End Date is required"],
  },
  isVip: {
    type: Boolean,
    required: [true, "Is Vip is required"],
  },
  guests: {
    type: Number,
    required: [true, "Guests is required"],
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
