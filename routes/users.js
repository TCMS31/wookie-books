var express = require('express');
var router = express.Router();
var expressAsyncHandler = require('express-async-handler');

var userController = require('../controllers/users.controller')


router.post('/', expressAsyncHandler(userController.createUser));

module.exports = router;
