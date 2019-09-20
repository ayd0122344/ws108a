const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;//伺服器運作正常
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body> Hello! <a href="https://www.youtube.com/">YouTube </a></body></html>');
});//回應程式

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});