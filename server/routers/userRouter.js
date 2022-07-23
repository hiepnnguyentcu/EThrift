const {
  signUp,
  signIn,
  getUserInfo,
  getAllUsers,
  signUpByAdmin,
} = require("../handlers/user");
const { authenticateJWT, allowRole } = require("../utils/authenticate");
const { ROLES } = require("../constants/role");
module.exports = (app) => {
  app.post("/signup", signUp);
  app.post(
    "/admin/signup",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    signUpByAdmin
  );
  app.post("/signin", signIn);
  app.get("/user/:userHandle", authenticateJWT, getUserInfo);
  app.get("/users", authenticateJWT, allowRole(ROLES.ADMIN_ID), getAllUsers);
};
