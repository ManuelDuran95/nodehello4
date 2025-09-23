const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080; // Use App Engine's provided PORT

const server = http.createServer((req, res) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  console.log("verions of nodejs", process.version);
  const response = { message: 'Hello, World!' };
  res.end(JSON.stringify(response));
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
