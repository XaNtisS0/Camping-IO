const {
  createCampingSpot,
  deleteCampingSpot,
  getCampingSpotById,
  getCampingSpots,
  updateCampingSpot,
} = require("../controllers/campingSpot-ctrl");
const createRouterForActions = require("../helpers/routeCreator");

const actions = {
  createCampingSpot: {
    method: "post",
    url: "/",
    action: createCampingSpot,
  },
  getCampingSpots: {
    method: "get",
    url: "/",
    action: getCampingSpots,
  },
  getCampingSpotById: {
    method: "get",
    url: "/:id",
    action: getCampingSpotById,
  },
  updateCampingSpot: {
    method: "put",
    url: "/:id",
    action: updateCampingSpot,
  },
  deleteCampingSpot: {
    method: "delete",
    url: "/:id",
    action: deleteCampingSpot,
  },
};

module.exports = createRouterForActions(actions);
