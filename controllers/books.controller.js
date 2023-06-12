const bookService = require("../dal/books.dao");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};

async function createBook(req, res) {
  let reqBody = req.body;
  const book = await bookService.addBook(reqBody);
  return res.send(book);
}

async function getBooks(req, res) {
  const books = await bookService.listBooks();
  return res.send(books);
}

async function getBookById(req, res) {
  const bookId = req.params.id;

  const book = await bookService.getBookById(bookId);
  console.log(book);
  return res.send(book);
}

async function updateBook(req, res) {
  const reqBody = req.body;
  const bookId = req.params.id;

  const updatedBook = await bookService.updateBook(bookId, reqBody);
  return res.send(updatedBook);
}

async function deleteBook(req, res) {
  const bookId = req.params.id;

  const deletedBook = await bookService.deleteBook(bookId);
  return res.send(bookFormatter(deletedBook?._doc));
}

function bookFormatter(book) {
  let formattedBook = { ...book };
  delete formattedBook.createdAt;
  delete formattedBook.updatedAt;
  delete formattedBook.__v;

  return formattedBook;
}
