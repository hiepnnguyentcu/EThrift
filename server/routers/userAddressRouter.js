const {
  getUserAddresses,
  addUserAddress,
  editUserAddress,
} = require("../handlers/userAdress");

const { authenticateJWT, allowRole } = require("../utils/authenticate");

const { ROLES } = require("../constants/role");

module.exports = (app) => {
  // Get All User Addresses
  app.get("/address", authenticateJWT, getUserAddresses);

  // Edit User Address
  app.patch("/address/:id", authenticateJWT, editUserAddress);

  // Add User Address
  app.post("/address", authenticateJWT, addUserAddress);
};
