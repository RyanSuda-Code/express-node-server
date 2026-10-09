const express = require("express");
const app = express();
const path = require("node:path");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const PORT = 3000;

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.post("/contact-me", (req, res) => res.send("Contact received"));

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);
app.use((req, res) => res.sendFile(path.join(__dirname, "404.html")));

//__dirname refers to the directory containing the JavaScript file you're currently writing

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`server running at http://localhost:${PORT}`);
});

/*setting up express
  Inside a new directory, start by running "npm init -y" to create a package.json. 
  Once that’s created, we can install the Express dependency.
  "npm install express"
  We can now create an app.js file that will serve as the starting point for our Express server. 
*/

/*
const express = require("express"); //import express
const app = express(); //creates teh server application.

app.get("/", (req, res) => res.send("Hello World!")); // Tells the server how to handle a request to the homepage

const PORT = 3000;

app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first express app - listening on port ${PORT}!`);
});
// NOTE (The Odin Project): Express 5 allows an 'error' argument in app.listen().
// In Express 4, this argument is undefined, but leaving it here ensures
// forward-compatibility and won't break your app.
*/
