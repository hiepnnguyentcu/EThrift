const {
  getAllProduct,
  getProduct,
  createProduct,
} = require("../handlers/product");

const { authenticateJWT, allowRole } = require("../utils/authenticate");

const { ROLES } = require("../constants/role");

module.exports = (app) => {
  app.get("/product/:productID", getProduct);
  app.get("/products", getAllProduct);
  app.post(
    "/product",
    authenticateJWT,
    allowRole(ROLES.SELLER_ID),
    createProduct
  );
};
