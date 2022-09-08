const { ROLES } = require("../constants/role");
const { createOrder, deleteOrder, getOrders } = require("../handlers/order");
const { authenticateJWT, allowRole } = require("../utils/authenticate");

module.exports = function (app) {
  /**
   * @api {post} /order Create Order
   * @apiName Create Order
   * @apiPermission buyer
   * @apiGroup Order
   *
   * @apiHeader {String} authorization Buyer Access Token
   *
   * @apiBody {String} seller Handle of Seller
   * @apiBody {String} addressID Address ID of User
   * @apiBody {Object[]} products List of Products
   * @apiBody {String} products.productID ID of Product
   * @apiBody {String} products.size Size of Product
   * @apiBody {String} products.variation Variation of Product
   * @apiBody {String} products.quantity Quantity of Product
   * @apiBody {String} products.note Note for Product
   *
   * @apiSuccess {Object} order New Order Data
   *
   */
  app.post("/order", authenticateJWT, allowRole(ROLES.BUYER_ID), createOrder);

  /**
   * @api {delete} /order/:orderID Delete Order
   * @apiName Delete Order
   * @apiPermission seller admin
   * @apiGroup Order
   *
   * @apiParam {String} orderID ID of Order
   *
   * @apiHeader {String} authorization Seller or Admin Access Token
   *
   * @apiSuccess {Object} order Deleted Order Data
   *
   */
  app.delete(
    "/order/:orderID",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID, ROLES.SELLER_ID),
    deleteOrder
  );

  /**
   * @api {get} /orders Get Orders Related to User Role and ID
   * @apiName Get Orders
   * @apiGroup Order
   *
   * @apiHeader {String} authorization User Access Token
   *
   * @apiSuccess {Object[]} orders All Orders Related to User
   *
   */
  app.get("/orders", authenticateJWT, getOrders);
};
