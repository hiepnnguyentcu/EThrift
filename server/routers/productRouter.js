const {
  getAllProduct,
  getProduct,
  createProduct,
  deleteProduct,
} = require("../handlers/product");

const { authenticateJWT, allowRole } = require("../utils/authenticate");

const { ROLES } = require("../constants/role");

module.exports = (app) => {
  /**
   * @api {get} /product/:productID Get Specific Product
   * @apiName Get Specific Product
   * @apiGroup Product
   *
   * @apiParam {String} productID ID of Product
   *
   * @apiSuccess {Object} product Product Data
   *
   */
  app.get("/product/:productID", getProduct);

  /**
   * @api {get} /products Get All Product
   * @apiName Get All Product
   * @apiGroup Product
   *
   * @apiSuccess {Object[]} products List of Product
   *
   */
  app.get("/products", getAllProduct);

  /**
   * @api {post} /product Add New Product
   * @apiName Add Product
   * @apiPermission seller
   * @apiGroup Product
   *
   * @apiHeader {String} authorization Seller Access Token
   *
   * @apiBody {String} name Name of Product
   * @apiBody {String} brief Briefing of Product
   * @apiBody {String} description Product Description
   * @apiBody {Number} price Price of Product
   * @apiBody {String} image Image URL of Product
   * @apiBody {String[]} categories Product Categories ID
   * @apiBody {String[]} sizes Sizes of Product
   * @apiBody {String[]} variations Variations of Product
   *
   * @apiSuccess {Object} product New Product Data
   *
   */
  app.post(
    "/product",
    authenticateJWT,
    allowRole(ROLES.SELLER_ID),
    createProduct
  );

  /**
   * @api {delete} /product/:id Delete Product
   * @apiName Delete Product
   * @apiPermission seller admin
   * @apiGroup Product
   *
   * @apiParam {String} id ID of Product
   *
   * @apiHeader {String} authorization Seller or Admin Access Token
   *
   * @apiSuccess {String} message Successful Message
   *
   */
  app.delete(
    "/product/:id",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID, ROLES.SELLER_ID),
    deleteProduct
  );
};
