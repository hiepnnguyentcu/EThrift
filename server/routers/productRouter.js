const {
  getAllProduct,
  getProduct,
  createProduct,
  deleteProduct,
} = require("../handlers/product");

const { authenticateJWT, allowRole } = require("../utils/authenticate");

const { ROLES } = require("../constants/role");

module.exports = (app) => {
  // Get product with Product ID
  app.get("/product/:productID", getProduct);

  // Get All Product
  app.get("/products", getAllProduct);

  // Upload a Product
  app.post(
    "/product",
    authenticateJWT,
    allowRole(ROLES.SELLER_ID),
    createProduct
  );

  // Delete a Product
  app.delete(
    "/product/:id",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID, ROLES.SELLER_ID),
    deleteProduct
  );
};
