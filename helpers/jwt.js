const expressJwt = require("express-jwt");

const secret = "3845ldgjkvbkljdhj34095lvjkbkj3496cvlkb";

module.exports = jwt;
function jwt() {
  return expressJwt({ secret, algorithms: ["HS256"] }).unless({
    path: ["/api/login"],
  });
}
