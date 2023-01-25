const express = require("express");

const bookRouter = express.Router();

const books = [
  {
    id: 1,
    title: "War and Peace",
    year: 1869,
  },
  {
    id: 2,
    title: "The Great Gatsby",
    year: 1925,
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    year: 1951,
  },
];
const getBooks = (req, res) => {
  res.json(books);
};
const showBookPage = (req, res) => {
  res.render("book.html");
};
bookRouter.get("/", getBooks);
bookRouter.get("/book-page", showBookPage);

bookRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id == id);

  if (!book) {
    res.status(404).end("Book not found");
    return;
  }

  res.json(book);
});

bookRouter.post("/", (req, res) => {
  const book = req.body;
  books.push(book);
  res.json(book);
});

bookRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const book = req.body;
  const index = books.findIndex((book) => book.id == id);

  if (index == -1) {
    res.status(404).end("Book not found");
    return;
  }

  books[index] = book;
  res.json(book);
});

bookRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = books.findIndex((book) => book.id == id);
  if (index == -1) {
    res.status(404).end("Book not found");
    return;
  }

  books.splice(index, 1);
  res.json(books);
});

module.exports = {
  bookRouter,
  getBooks,
  showBookPage,
};
