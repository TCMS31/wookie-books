var express = require('express');
var router = express.Router();


var userRoutes = require('./users')
/* GET home page. */
router.use('/users' , userRoutes)

module.exports = router;
