const _jwt = require("../utilities/jwt");

exports.authorization = (req, res, next) => {
    
    if (!req.headers.authorization) {
        return res.status(401).send("Not Authorized")
    }

    let token = req.headers.authorization.split(" ")[1];

    if (token === null) return res.status(401).send("Not Authorized")

    try {
        var decoded = _jwt.Verify(token);
        req.userId = decoded._id;
        next()
    } catch (err) {
        // err
        return res.status(401).send("Not Authorized")
    }

}