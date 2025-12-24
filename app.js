const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080; // Use App Engine's provided PORT

const server = http.createServer((req, res) => {
  console.log("quizarIRU", "https://quizapp-frontend-974768286444.us-central1.run.app/home");
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  console.log("verions of nodejs s", process.version);
  const response = { message: 'Hello, World! 2' };
  res.end(JSON.stringify(response));
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
