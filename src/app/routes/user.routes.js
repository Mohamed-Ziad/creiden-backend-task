const _router = require("express").Router();
const _userController = require("../controllers/user.controller");
const _storeImage = require("../utilities/multer");
const _guard = require("../middlewares/auth.guard");
const _roleGuard = require("../middlewares/role.guard");

_router.post("/create",
    _guard.authorization,
    _roleGuard.AdminGuard,
    _storeImage.storeImage.fields([{ name: "image", maxCount: 1 }]),
    _userController.create)

_router.post("/get-all", _userController.getAll);



module.exports = _router;
