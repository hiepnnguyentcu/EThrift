const {
  addProductCategory,
  editProductCategory,
  deleteProductCategory,
  getAllProductCategories,
} = require("../handlers/productCategory");

const { authenticateJWT, allowRole } = require("../utils/authenticate");

const { ROLES } = require("../constants/role");

module.exports = (app) => {
  app.post(
    "/category",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    addProductCategory
  );

  app.patch(
    "/category/:id",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    editProductCategory
  );

  app.delete(
    "/category/:id",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    deleteProductCategory
  );

  app.get("/categories", getAllProductCategories);
};
