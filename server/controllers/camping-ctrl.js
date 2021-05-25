const Camping = require("../models/Camping");
const {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
} = require("../helpers/ctrl-factory");

// POST /api/forms
const createCamping = factoryCreateEndpoint(Camping);

// GET /api/Campings
const getCampings = factoryGetAllEndpoint(Camping);

// GET /api/Campings/:id
const getCampingById = factoryGetOneByIdEndpoint(Camping);

// PUT /api/Campings/:id
const updateCamping = factoryUpdateEndpoint(Camping);

// DELETE /api/Campings/:id
const deleteCamping = factoryDeleteEndpoint(Camping);

module.exports = {
  createCamping,
  getCampings,
  getCampingById,
  updateCamping,
  deleteCamping,
};
