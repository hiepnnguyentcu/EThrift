const jwt = require("jsonwebtoken");


require('dotenv').config();

const SECRET = process.env.SECRET_KEY;

function getTokenFromHeader(req){
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
  
    return false;
}
  

exports.authenticateJWT = async function authenticateJWT(req, res, next) {
    const token = getTokenFromHeader(req);
    if(token) {
        try {
            let user = jwt.verify(token, SECRET);
            
            req.user = user;

            next();
        }
        catch(err) {
            return res.status(400).json({message: "Your JWT is invalid."})
        }

    }
    else {
        return res.status(400).json({message: "No JWT detected."});
    }
}

