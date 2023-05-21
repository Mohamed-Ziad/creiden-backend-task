const _routes = require("express").Router();
const _authController = require("../controllers/auth.controller");


_routes.post("/register", _authController.register);

_routes.post("/login", _authController.login);

module.exports = _routes;
