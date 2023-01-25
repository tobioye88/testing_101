const supertest = require("supertest");
const app = require("../app");
//jest

describe("E2E /books", () => {
  it("should get a list of Books", async () => {
    const response = await supertest(app).get("/books");

    // expect(response.headers["content-type"]).toBe(
    //   "application/json; charset=utf-8"
    // );
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
});
