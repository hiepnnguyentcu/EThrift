const {signUp, signIn, getUserInfo} = require("../handlers/user");
const {authenticateJWT} = require("../utils/authenticate");

module.exports = (app) => {
    app.post("/signup", signUp);
    app.post("/signin", signIn);
    app.get("/user",authenticateJWT, getUserInfo);
}