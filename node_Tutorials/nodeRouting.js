const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url === "/") {
    res.end("Hello from the Home Page");
  } else if (req.url === "/about") {
    res.end("Hello from the About Page");
  } else if (req.url === "/contact") {
    res.end("Hello from the Contact Us page");
  } else if (req.url === "/userapi") {
    // Rule of writing (Mandatory) in the curly braces{"content-type":"application/json"}
    // 200 is written means all okay in the server
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[0].first_name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error page. Page doesn't exits</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});
