const jwt = require("jsonwebtoken");

console.log(jwt);

function verifyToken(req, res, next) {

    console.log("Middleware is running");

    next();
}


module.exports = verifyToken;