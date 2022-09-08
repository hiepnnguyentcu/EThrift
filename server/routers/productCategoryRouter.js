const {
  addProductCategory,
  editProductCategory,
  deleteProductCategory,
  getAllProductCategories,
} = require("../handlers/productCategory");

const { authenticateJWT, allowRole } = require("../utils/authenticate");

const { ROLES } = require("../constants/role");

module.exports = (app) => {
  /**
   * @api {post} /category/ Add Product Category
   * @apiName Add Product Category
   * @apiPermission admin
   * @apiGroup ProductCategory
   *
   * @apiHeader {String} authorization Admin Access Token
   *
   * @apiBody {String} name Name of Category
   * @apiBody {String} image Image URL of Category
   *
   * @apiSuccess {Object} category New Category
   *
   */
  app.post(
    "/category",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    addProductCategory
  );

  /**
   * @api {patch} /category/:id Edit Product Category
   * @apiName Edit Product Category
   * @apiPermission admin
   * @apiGroup ProductCategory
   *
   * @apiParam {String} id Id of Product Category
   *
   * @apiHeader {String} authorization Admin Access Token
   *
   * @apiBody {String} [name] Name of Category
   * @apiBody {String} [image] Image URL of Category
   *
   * @apiSuccess {Object} category New Category
   *
   */
  app.patch(
    "/category/:id",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    editProductCategory
  );

  /**
   * @api {delete} /category/:id Delete Product Category
   * @apiName Delete Product Category
   * @apiPermission admin
   * @apiGroup ProductCategory
   *
   * @apiParam {String} id Id of Product Category
   *
   * @apiHeader {String} authorization Admin Access Token
   *
   * @apiSuccess {String} message Successful Message
   *
   */
  app.delete(
    "/category/:id",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    deleteProductCategory
  );

  /**
   * @api {get} /categories Get All Product Categories
   * @apiName Get All Product Categories
   * @apiGroup ProductCategory
   *
   * @apiSuccess {Object[]} categories List of Product Categories
   *
   */
  app.get("/categories", getAllProductCategories);
};
