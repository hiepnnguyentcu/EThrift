const { ROLES } = require("../constants/role");
const { createOrder, deleteOrder, getOrders } = require("../handlers/order");
const { authenticateJWT, allowRole } = require("../utils/authenticate");

module.exports = function (app) {
  app.post("/order", authenticateJWT, allowRole(ROLES.BUYER_ID), createOrder);
  app.delete(
    "/order/:orderID",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID, ROLES.SELLER_ID),
    deleteOrder
  );
  app.get("/orders", authenticateJWT, getOrders);
};
