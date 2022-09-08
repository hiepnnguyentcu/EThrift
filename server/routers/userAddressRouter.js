const {
  getUserAddresses,
  addUserAddress,
  editUserAddress,
} = require("../handlers/userAdress");

const { authenticateJWT, allowRole } = require("../utils/authenticate");

const { ROLES } = require("../constants/role");

module.exports = (app) => {
  /**
   * @api {get} /address Get User Addresses
   * @apiName Get User Addresses
   * @apiGroup UserAddress
   *
   * @apiHeader {String} authorization User Access Token
   *
   * @apiSuccess {Object[]} address List of Addresses
   *
   */
  app.get("/address", authenticateJWT, getUserAddresses);

  /**
   * @api {patch} /address/:id Edit User Address
   * @apiName Edit User Address
   * @apiGroup UserAddress
   *
   * @apiHeader {String} authorization User Access Token
   *
   * @apiParam {Number} id Id of Address
   *
   * @apiSuccess {Object} address New Address
   *
   */
  app.patch("/address/:id", authenticateJWT, editUserAddress);

  /**
   * @api {post} /address/ Add User Address
   * @apiName Add User Address
   * @apiGroup UserAddress
   *
   * @apiHeader {String} authorization User Access Token
   *
   * @apiBody {String} address User Address
   *
   * @apiSuccess {Object} address Added Address
   *
   */
  app.post("/address", authenticateJWT, addUserAddress);
};
