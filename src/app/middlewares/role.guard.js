const _jwt = require("../utilities/jwt");

exports.AdminGuard = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  try {
    var decoded = _jwt.Verify(token);
    if (decoded.role === "admin") {
     return next()
    }
    return res.status(403).send("You Don't Have a permission") 
  } catch (err) {
    // err
    return res.status(401).send("Not Authorized #$#")
  }

}