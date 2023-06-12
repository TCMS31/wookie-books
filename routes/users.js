var express = require("express");
var router = express.Router();
var expressAsyncHandler = require("express-async-handler");

var userController = require("../controllers/users.controller");

var idValidator = require("../middleware/idValidator");

router.post("/", expressAsyncHandler(userController.createUser));
router.get("/", expressAsyncHandler(userController.getUsers));
router.get("/:id", idValidator, expressAsyncHandler(userController.getUserById));
router.put("/:id", idValidator, expressAsyncHandler(userController.updateUser));
router.delete("/:id", idValidator, expressAsyncHandler(userController.deleteUser));

module.exports = router;
