const express = require("express");
const app = express();

// Forward slash meaning the root or the HOME page"/"
app.get("/", (req, res) => {
  res.send("Hello From Express Js");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.listen(8000, () => {
  console.log("Listening to PORT 8000");
});
