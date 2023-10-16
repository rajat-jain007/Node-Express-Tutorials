const http = require("http");

const server = http.createServer((req, res) => {
  // IF the req.url is met correctly then response(res)
  if (req.url === "/") {
    console.log("request event");
    res.end("Welcome to Our Home Page");
    // IF the req.url is met correctly then response(res)
  } else if (req.url === "/about") {
    res.end("Here is Our Short History");
  } else {
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'>Back Home </a>
    `);
  }
});
server.listen(5000);
