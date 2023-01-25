const { getBooks, showBookPage } = require("../routes/books");

describe("Book controller", () => {
  it("should test book controller", () => {
    const req = {};
    const res = {
      data: "",
      json: function (data) {
        this.data = JSON.stringify(data);
      },
    };

    getBooks(req, res);

    expect(res.data).toBe(
      '[{"id":1,"title":"War and Peace","year":1869},{"id":2,"title":"The Great Gatsby","year":1925},{"id":3,"title":"The Catcher in the Rye","year":1951}]'
    );
  });

  it("should test when a page renders", () => {
    const req = {};
    const res = {
      data: "",
      pageName: "",
      render: function (pageName) {
        this.pageName = pageName;
      },
    };

    showBookPage(req, res);

    expect(res.pageName).toBe("book.html");
  });
});

// test a controller
// test when a page renders

// test a route expects jwt token
// test a route expects validation
// test a route uses mongodb
