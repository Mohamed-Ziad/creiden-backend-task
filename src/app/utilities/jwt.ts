const jwt = require("jsonwebtoken");

const _SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.Generate = payload => jwt.sign(payload, _SECRET_KEY);

exports.Verify = token => jwt.verify(token, _SECRET_KEY)