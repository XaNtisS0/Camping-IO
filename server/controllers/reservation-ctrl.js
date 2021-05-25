const Reservation = require("../models/Reservation");
const {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
} = require("../helpers/ctrl-factory");

// POST /api/forms
const createReservation = factoryCreateEndpoint(Reservation);

// GET /api/Reservations
const getReservations = factoryGetAllEndpoint(Reservation);

// GET /api/Reservations/:id
const getReservationById = factoryGetOneByIdEndpoint(Reservation);

// PUT /api/Reservations/:id
const updateReservation = factoryUpdateEndpoint(Reservation);

// DELETE /api/Reservations/:id
const deleteReservation = factoryDeleteEndpoint(Reservation);

module.exports = {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
};
