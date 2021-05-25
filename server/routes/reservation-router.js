const {
  createReservation,
  deleteReservation,
  getReservationById,
  getReservations,
  updateReservation,
} = require("../controllers/reservation-ctrl");
const createRouterForActions = require("../helpers/routeCreator");

const actions = {
  createReservation: {
    method: "post",
    url: "/",
    action: createReservation,
  },
  getReservations: {
    method: "get",
    url: "/",
    action: getReservations,
  },
  getReservationById: {
    method: "get",
    url: "/:id",
    action: getReservationById,
  },
  updateReservation: {
    method: "put",
    url: "/:id",
    action: updateReservation,
  },
  deleteReservation: {
    method: "delete",
    url: "/:id",
    action: deleteReservation,
  },
};

module.exports = createRouterForActions(actions);
