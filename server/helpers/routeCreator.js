const express = require("express");

export const createRouterForActions = (actions) => {
  const values = Object.values(actions);
  const router = express.Router();
  for (const { method, url, action } of values) {
    router[method](url, action);
  }
  return router;
};
