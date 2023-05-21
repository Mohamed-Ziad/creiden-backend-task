const jwt = require("jsonwebtoken");

const _SECRET_KEY = `C@TCH+YOUR+$ELF`;

exports.Generate = payload => jwt.sign(payload, _SECRET_KEY);

exports.Verify = token => jwt.verify(token, _SECRET_KEY)