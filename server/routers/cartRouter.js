const { ROLES } = require("../constants/role");
const {
  createCart,
  deleteCart,
  updateCart,
  getCarts,
} = require("../handlers/cart");
const { authenticateJWT, allowRole } = require("../utils/authenticate");

module.exports = function (app) {
  /**
   * @api {post} /order Create Cart
   * @apiName Create Cart
   * @apiPermission buyer
   * @apiGroup Cart
   *
   * @apiHeader {String} authorization Buyer Access Token
   *
   * @apiBody {String} seller Handle of Seller
   * @apiBody {Object[]} products List of Products
   * @apiBody {String} products.productID ID of Product
   * @apiBody {String} products.size Size of Product
   * @apiBody {String} products.variation Variation of Product
   * @apiBody {String} products.quantity Quantity of Product
   * @apiBody {String} products.note Note for Product
   *
   * @apiSuccess {Object} cart New Cart Data
   *
   */
  app.post("/cart", authenticateJWT, allowRole(ROLES.BUYER_ID), createCart);

  /**
   * @api {patch} /order/:cartID Update Cart
   * @apiName Update Cart
   * @apiPermission buyer
   * @apiGroup Cart
   *
   * @apiParam cartID ID of Cart
   *
   * @apiHeader {String} authorization Buyer Access Token
   *
   * @apiBody {Object[]} products List of Products
   * @apiBody {String} products.productID ID of Product
   * @apiBody {String} products.size Size of Product
   * @apiBody {String} products.variation Variation of Product
   * @apiBody {String} products.quantity Quantity of Product
   * @apiBody {String} products.note Note for Product
   *
   * @apiSuccess {Object} cart New Cart Data
   *
   */
  app.post(
    "/cart/:cartID",
    authenticateJWT,
    allowRole(ROLES.BUYER_ID),
    updateCart
  );

  /**
   * @api {delete} /cart/:cartID Delete Order
   * @apiName Delete Order
   * @apiPermission buyer admin
   * @apiGroup Cart
   *
   * @apiParam {String} cartID ID of Cart
   *
   * @apiHeader {String} authorization Buyer or Admin Access Token
   *
   * @apiSuccess {Object} cart Deleted Cart Data
   *
   */
  app.delete(
    "/cart/:cartID",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID, ROLES.BUYER_ID),
    deleteCart
  );

  /**
   * @api {get} /carts Get Carts Related to User Role and ID
   * @apiName Get Carts
   * @apiGroup Cart
   *
   * @apiHeader {String} authorization User Access Token
   *
   * @apiSuccess {Object[]} orders All Orders Related to User
   *
   */
  app.get(
    "/carts",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID, ROLES.BUYER_ID),
    getCarts
  );
};
