const {
  createCamping,
  deleteCamping,
  getCampingById,
  getCampings,
  updateCamping,
} = require("../controllers/camping-ctrl");
const createRouterForActions = require("../helpers/routeCreator");

const actions = {
  createCamping: {
    method: "post",
    url: "/",
    action: createCamping,
  },
  getCampings: {
    method: "get",
    url: "/",
    action: getCampings,
  },
  getCampingById: {
    method: "get",
    url: "/:id",
    action: getCampingById,
  },
  updateCamping: {
    method: "put",
    url: "/:id",
    action: updateCamping,
  },
  deleteCamping: {
    method: "delete",
    url: "/:id",
    action: deleteCamping,
  },
};

module.exports = createRouterForActions(actions);
