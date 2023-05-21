const _router = require("express").Router();
const _userController = require("../controllers/user.controller");
const _storeImage = require("../utilities/multer");
const _guard = require("../middlewares/auth.guard");
const _roleGuard = require("../middlewares/role.guard");

_router.get("/", _guard.authorization, _userController.getAll);

_router.get("/:userId", _guard.authorization, _roleGuard.UserGuard, _userController.getOne);

_router.post("/",
    _guard.authorization,
    _roleGuard.AdminGuard,
    _storeImage.storeImage.fields([{ name: "image", maxCount: 1 }]),
    _userController.create)

_router.put("/update-user/:userId",
    _guard.authorization,
    // _roleGuard.UserGuard,
    _storeImage.storeImage.fields([{ name: "image", maxCount: 1 }]),
    _userController.update)

_router.delete("/",
    _guard.authorization,
    _roleGuard.UserGuard,
)

module.exports = _router;
