

var express = require("express");
var router = express.Router();
var expressAsyncHandler = require("express-async-handler");

var userController = require("../controllers/users.controller");
var userSchemas = require("../schemas/user.schema");
var schemaValidator = require("../utils/schemaValidator");

router.post("/login" , schemaValidator(userSchemas.loginSchema) , expressAsyncHandler(userController.login));

module.exports = router;
