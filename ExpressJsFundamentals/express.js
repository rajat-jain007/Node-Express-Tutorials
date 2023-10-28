const express = require("express");
const app = express();

// Forward slash meaning the root or the HOME page"/"
app.get("/", (req, res) => {
  res.send("<h1> Hello From Express Js</h1>");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// This status(200).send means we are explicitely mentioning the status code ie- Page is ok

app.get("/contact", (req, res) => {
  res.status(200).send("This is Contact Page");
});

app.listen(8000, () => {
  console.log("Listening to PORT 8000");
});
