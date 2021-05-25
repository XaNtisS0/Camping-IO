const User = require("../models/User");
const {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
} = require("../helpers/ctrl-factory");

// POST /api/forms
const createUser = factoryCreateEndpoint(User);

// GET /api/Users
const getUsers = factoryGetAllEndpoint(User);

// GET /api/Users/:id
const getUserById = factoryGetOneByIdEndpoint(User);

// PUT /api/Users/:id
const updateUser = factoryUpdateEndpoint(User);

// DELETE /api/Users/:id
const deleteUser = factoryDeleteEndpoint(User);

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
