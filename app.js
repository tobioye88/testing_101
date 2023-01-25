const express = require("express");
const bodyParser = require("body-parser");

const { bookRouter } = require("./routes/books");
const authorRoute = require("./routes/authors");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/books", bookRouter);
app.use("/authors", authorRoute);

app.get("/", (req, res) => {
  res.end("Home Page");
});

app.get("/about", (req, res) => {
  res.end("About Page");
});

app.get("/contact", (req, res) => {
  res.end("Contact Page");
});

module.exports = app;
