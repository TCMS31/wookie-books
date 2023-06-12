var express = require('express');
var router = express.Router();

var authRoutes = require('./auth')
var userRoutes = require('./users')
var bookRoutes = require('./books')

router.use('/auth' , authRoutes)
router.use('/users' , userRoutes)
router.use('/books' , bookRoutes)

module.exports = router;
