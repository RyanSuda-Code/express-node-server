const { Router } = require("express");

const authorRouter = Router();

//we destructure the Express object to get a Router function and use it to create our authorRouter

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorID", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

module.exports = authorRouter;
