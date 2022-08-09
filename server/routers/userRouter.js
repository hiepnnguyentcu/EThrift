const {
  signUp,
  signIn,
  getUserInfo,
  getAllUsers,
  getJWT,
  signUpByAdmin,
} = require("../handlers/user");
const {
  authenticateJWT,
  allowRole,
  authenticateRefreshToken,
} = require("../utils/authenticate");
const { ROLES } = require("../constants/role");
module.exports = (app) => {
  // Sign Up
  app.post("/signup", signUp);

  // Sign Up Admin Account
  app.post(
    "/admin/signup",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    signUpByAdmin
  );

  // Sign In
  app.post("/signin", signIn);

  // Get Access Token
  app.get("/user/access-token", authenticateRefreshToken, getJWT);

  // Get Specific User Data
  app.get("/user/:userHandle", authenticateJWT, getUserInfo);

  // Get All Users Data
  app.get("/users", authenticateJWT, allowRole(ROLES.ADMIN_ID), getAllUsers);
};
