# Express: Serving HTML Files

## Setting up Express

-Inside a new directory, start by running "npm init -y" to create a package.json.
-Once that’s created, we can install the Express dependency.
↓
"npm install express"
-We can now create an app.js file that will serve as the starting point for our Express server.

## Basic Express Server

```js
const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;
```

- `express` → lets us create the web server.
- `path` → built-in Node.js module for safely working with file paths.
- `app` → our Express application.
- `PORT` → the port where our server runs.

## Routes

```js
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
```

When the browser requests `/`:

```text
Browser
   ↓ GET /
Express
   ↓
app.get("/")
   ↓
send index.html
   ↓
Browser
```

### `req` and `res`

- `req` = **request** from the client/browser.
- `res` = **response** we send back.

We don't need `req` if we aren't using information from the request.

## `sendFile()`

```js
res.sendFile(path.join(__dirname, "index.html"));
```

This tells Express:

> Find this HTML file and send it to the browser.

### `path.join()`

```js
path.join(__dirname, "index.html");
```

- `__dirname` → directory where the current JavaScript file is located.
- `"index.html"` → the file we want.
- `path.join()` → safely combines them into a file path.

Example:

```text
my-project/
├── app.js
├── index.html
├── about.html
├── contact-me.html
└── 404.html
```

`path.join(__dirname, "index.html")` points to:

```text
my-project/index.html
```

## Multiple Routes

```js
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
```

Different URL → different response.

```text
/             → index.html
/about        → about.html
/contact-me   → contact-me.html
```

## 404 Catch-All

```js
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});
```

If none of the routes above match, Express reaches this middleware.

```text
GET /about
   ↓
Does / match?       ❌
   ↓
Does /about match?   ✅
   ↓
about.html
```

But:

```text
GET /banana
   ↓
Does / match?        ❌
   ↓
Does /about match?   ❌
   ↓
Does /contact-me?    ❌
   ↓
app.use()
   ↓
404.html
```

## Starting the Server

```js
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`server running at http://localhost:${PORT}`);
});
```

`app.listen()` tells Express to start listening for incoming requests.

### Big Picture

```text
Browser
   ↓
HTTP Request
   ↓
Express Server
   ↓
Route matching
   ↓
Response
   ↓
HTML sent back to Browser
```

### Remember

**Express = handles requests and routes**

**`path` = helps create reliable file paths**

**`sendFile()` = sends a file to the client**

**`app.use()` = middleware that can catch requests that weren't handled earlier**

**`app.listen()` = starts the server**
