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
  /**
   * @api {post} /signup Sign Up User
   * @apiName Sign Up
   * @apiGroup User
   *
   * @apiBody {String} email Users email.
   * @apiBody {String} password Users password.
   * @apiBody {Number} role Users Role
   * @apiBody {String} handle Username.
   *
   * @apiSuccess {Object} userData All User Data.
   * @apiSuccess {Object} tokens List of User Token.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
            "userData": {
                "email": "1@gmail.com",
                "role": 2,
                "handle": "binbeo",
                "avatarImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
                "createdAt": 1662616955,
                "modifiedAt": 1662616955
            },
            "tokens": {
                "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IkFDQ0VTUyIsImV4cCI6MTY2MjcwMzM1NSwiaWF0IjoxNjYyNjE2OTU0fQ.XQAxmuibE9ltXF5BnBkowRKIFZRWGJOoA7I_r9qc8Jk",
                "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IlJFRlJFU0giLCJleHAiOjE2NzA1NjU3NTUsImlhdCI6MTY2MjYxNjk1NH0.38Ez78YEJoKV4WSs5UtCreC2TYvmt4MaS_bHWisLyW0"
            }
          }
   */
  app.post("/signup", signUp);

  /**
   * @api {post} /admin/signup Sign Up Admin
   * @apiName Sign Up
   * @apiGroup User
   * @apiPermission admin
   * 
   * @apiHeader {String} authorization Admin Access Token.
   *
   * @apiBody {String} email Users email.
   * @apiBody {String} password Users password.
   * @apiBody {Number} role Users Role
   * @apiBody {String} handle Username.
   *
   * @apiSuccess {Object} userData All User Data.
   * @apiSuccess {Object} tokens List of User Token.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
            "userData": {
                "email": "1@gmail.com",
                "role": 1,
                "handle": "binbeo",
                "avatarImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
                "createdAt": 1662616955,
                "modifiedAt": 1662616955
            },
            "tokens": {
                "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IkFDQ0VTUyIsImV4cCI6MTY2MjcwMzM1NSwiaWF0IjoxNjYyNjE2OTU0fQ.XQAxmuibE9ltXF5BnBkowRKIFZRWGJOoA7I_r9qc8Jk",
                "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IlJFRlJFU0giLCJleHAiOjE2NzA1NjU3NTUsImlhdCI6MTY2MjYxNjk1NH0.38Ez78YEJoKV4WSs5UtCreC2TYvmt4MaS_bHWisLyW0"
            }
          }
   */
  app.post(
    "/admin/signup",
    authenticateJWT,
    allowRole(ROLES.ADMIN_ID),
    signUpByAdmin
  );

  /**
   * @api {post} /signin Sign In
   * @apiName Sign In
   * @apiGroup User
   *
   * @apiBody {String} email Users email.
   * @apiBody {String} password Users password.
   *
   * @apiSuccess {Object} userData All User Data.
   * @apiSuccess {Object} tokens List of User Token.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
            "userData": {
                "email": "1@gmail.com",
                "role": 2,
                "handle": "binbeo",
                "avatarImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
                "createdAt": 1662616955,
                "modifiedAt": 1662616955
            },
            "tokens": {
                "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IkFDQ0VTUyIsImV4cCI6MTY2MjcwMzM1NSwiaWF0IjoxNjYyNjE2OTU0fQ.XQAxmuibE9ltXF5BnBkowRKIFZRWGJOoA7I_r9qc8Jk",
                "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IlJFRlJFU0giLCJleHAiOjE2NzA1NjU3NTUsImlhdCI6MTY2MjYxNjk1NH0.38Ez78YEJoKV4WSs5UtCreC2TYvmt4MaS_bHWisLyW0"
            }
          }
   */
  app.post("/signin", signIn);

  /**
   * @api {get} /user/access-token Get User Access Token
   * @apiName Get User Access Token
   * @apiGroup User
   *
   * @apiHeader {String} authorization User Refresh Token.
   *
   * @apiSuccess {Object} accessToken USer AccessToken
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
           "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlbGxlckBnbWFpbC5jb20iLCJyb2xlIjozLCJoYW5kbGUiOiJzZWxsZXIiLCJ0eXBlIjoiQUNDRVNTIiwiZXhwIjoxNjYyNzAzNzA4LCJpYXQiOjE2NjI2MTczMDd9.leghrA7XW0Xji8h-elSqB_mtuZOa-sJ_2FildsOiDE8"
          }
   */
  app.get("/user/access-token", authenticateRefreshToken, getJWT);

  /**
   * @api {get} /user/:userHandle Get User Data
   * @apiName Get User Data
   * @apiGroup User
   *
   * @apiHeader {String} authorization User or Admin Access Token.
   * 
   * @apiParam userHandle User Handle
   *
   * @apiSuccess {Object} userData User Data
   * @apiSuccess {Object} tokens List of Tokens
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
            "userData": {
                "email": "seller@gmail.com",
                "role": 3,
                "handle": "seller",
                "avatarImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
                "createdAt": 1657877554,
                "modifiedAt": 1657877554
            },
            "tokens": {
                "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlbGxlckBnbWFpbC5jb20iLCJyb2xlIjozLCJoYW5kbGUiOiJzZWxsZXIiLCJ0eXBlIjoiUkVGUkVTSCIsImV4cCI6MTY2NTgyNjM1NCwiaWF0IjoxNjU3ODc3NTU0fQ.HtbEo8HiB2PryCiZ-LEz93py3y-OcsBDhaumpeiWIIc"
            }
          }
   */
  app.get("/user/:userHandle", authenticateJWT, getUserInfo);

  /**
   * @api {get} /users Get All Users Data
   * @apiName Get All Users Data
   * @apiGroup User
   * @apiPermission admin
   *
   * @apiHeader {String} authorization Admin Access Token.
   *
   * @apiSuccess {Object[]} users List of Users
   * @apiSuccess {Object} users.userData User Data
   * @apiSuccess {Object} users.tokens List of User tokens
   *
   */
  app.get("/users", authenticateJWT, allowRole(ROLES.ADMIN_ID), getAllUsers);
};
