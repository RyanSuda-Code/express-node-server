const { Router } = require("express");

const bookRouter = Router();

//we destructure the Express object to get a Router function and use it to create our bookRouter.

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});
bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId} reserved`);
});
bookRouter.post("/:bookId/reserve", (req, res) =>
  res.send("Book reservation received."),
);

module.exports = bookRouter;
