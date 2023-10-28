const express = require("express");
const app = express();

// It sends the Object in JSON format which implicitely uses JSON.stringyfy. Key value pairs will be in DOUBLE QUOTES ""
app.get("/temp", (req, res) => {
  res.send([
    {
      id: 1,
      name: "James",
    },
    {
      id: 2,
      name: "Bond",
    },
  ]);
});

app.listen(5000, () => {
  console.log("Listening To port 5000");
});
