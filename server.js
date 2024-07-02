const { log } = require("console");
const http = require("http");

//create server
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  res.end("<h1>hello Harsh</h1>");
});

//running
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// server.listen({ port });
