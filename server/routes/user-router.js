const {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} = require("../controllers/user-ctrl");
const createRouterForActions = require("../helpers/routeCreator");

const actions = {
  createUser: {
    method: "post",
    url: "/",
    action: createUser,
  },
  getUsers: {
    method: "get",
    url: "/",
    action: getUsers,
  },
  getUserById: {
    method: "get",
    url: "/:id",
    action: getUserById,
  },
  updateUser: {
    method: "put",
    url: "/:id",
    action: updateUser,
  },
  deleteUser: {
    method: "delete",
    url: "/:id",
    action: deleteUser,
  },
};

module.exports = createRouterForActions(actions);
