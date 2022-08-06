const jwt = require("jsonwebtoken");

require("dotenv").config();

const SECRET = process.env.SECRET_KEY;

function getTokenFromHeader(req) {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }

  return false;
}

exports.authenticateJWT = async function authenticateJWT(req, res, next) {
  const token = getTokenFromHeader(req);
  if (token) {
    try {
      let tokenData = jwt.verify(token, SECRET);

      if (tokenData.type === "REFRESH") {
        return res.status(400).json({ message: "Wrong type of Access Token." });
      }

      req.user = {
        email: tokenData.email,
        role: tokenData.role,
        handle: tokenData.handle,
      };

      next();
    } catch (err) {
      return res.status(400).json({ message: "Your JWT is invalid." });
    }
  } else {
    return res.status(400).json({ message: "No JWT detected." });
  }
};

exports.authenticateRefreshToken = async function authenticateRefreshToken(
  req,
  res,
  next
) {
  const token = getTokenFromHeader(req);
  if (token) {
    try {
      let tokenData = jwt.verify(token, SECRET);

      if (tokenData.type === "ACCESS") {
        return res
          .status(400)
          .json({ message: "Wrong type of Refresh Token." });
      }

      req.user = {
        email: tokenData.email,
        role: tokenData.role,
        handle: tokenData.handle,
      };

      next();
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Your Refresh Token is invalid." });
    }
  } else {
    return res.status(400).json({ message: "No Refresh Token detected." });
  }
};

exports.allowRole = function allowRole(...role) {
  return function (req, res, next) {
    if (!role.includes(req.user.role)) {
      return res.status(400).json({ message: "User not allowed." });
    }
    next();
  };
};
