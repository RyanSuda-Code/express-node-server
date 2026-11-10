const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();

//we destructure the Express object to get a Router function and use it to create our authorRouter

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", getAuthorById);
module.exports = authorRouter;
