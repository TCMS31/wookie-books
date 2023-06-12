const Book = require("../models/book.model");

const omittedBookFields = "-password -salt -createdAt -updatedAt -__v";
module.exports = {
  addBook,
  listBooks,
  getBookById,
  updateBook,
  deleteBook,
};

function addBook(payload) {
  const book = new Book(payload);
  return book.save();
}

function listBooks() {
  return Book.find().populate("author");
}

function getBookById(bookId) {
  return Book.findById(bookId).select(omittedBookFields);
}

function updateBook(bookId, payload) {
  return Book.findByIdAndUpdate(bookId, payload, { new: true }).select(omittedBookFields);
}

function deleteBook(bookId) {
  return Book.findByIdAndDelete(bookId).select(omittedBookFields);
}
