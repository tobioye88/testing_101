function booksController(req, res) {
  // page, size, query
  const books = booksService();

  res.status(200).json({ data: books });
}

function booksService() {
  return [
    {
      name: "Harry Potter",
    },
    {
      name: "The 5 Love languages",
    },
    {
      name: "Rich Dad, Poor Dad",
    },
  ];
}
