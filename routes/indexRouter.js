const { Router } = require("express");
const path = require("node:path");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html")); //".." mean go up one folder.
});

module.exports = indexRouter; //When another file imports this file, give it this router.
