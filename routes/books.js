var express = require("express");
var router = express.Router();
var expressAsyncHandler = require("express-async-handler");

var bookController = require("../controllers/books.controller");

var idValidator = require("../middleware/idValidator");

router.post("/", expressAsyncHandler(bookController.createBook));
router.get("/", expressAsyncHandler(bookController.getBooks));
router.get("/:id", idValidator, expressAsyncHandler(bookController.getBookById));
router.put("/:id", idValidator, expressAsyncHandler(bookController.updateBook));
router.delete("/:id", idValidator, expressAsyncHandler(bookController.deleteBook));

module.exports = router;
