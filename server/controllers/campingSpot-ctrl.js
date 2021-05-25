const CampingSpot = require("../models/CampingSpot");
const {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
} = require("../helpers/ctrl-factory");

// POST /api/forms
const createCampingSpot = factoryCreateEndpoint(CampingSpot);

// GET /api/CampingSpots
const getCampingSpots = factoryGetAllEndpoint(CampingSpot);

// GET /api/CampingSpots/:id
const getCampingSpotById = factoryGetOneByIdEndpoint(CampingSpot);

// PUT /api/CampingSpots/:id
const updateCampingSpot = factoryUpdateEndpoint(CampingSpot);

// DELETE /api/CampingSpots/:id
const deleteCampingSpot = factoryDeleteEndpoint(CampingSpot);

module.exports = {
  createCampingSpot,
  getCampingSpots,
  getCampingSpotById,
  updateCampingSpot,
  deleteCampingSpot,
};
