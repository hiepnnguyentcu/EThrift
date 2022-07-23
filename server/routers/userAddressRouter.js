const {
  getUserAddresses,
  addUserAddress,
  editUserAddress,
} = require("../handlers/userAdress");

const { authenticateJWT, allowRole } = require("../utils/authenticate");

const { ROLES } = require("../constants/role");

module.exports = (app) => {
  app.get("/address", authenticateJWT, getUserAddresses);

  app.patch("/address/:id", authenticateJWT, editUserAddress);

  app.post("/address", authenticateJWT, addUserAddress);
};
