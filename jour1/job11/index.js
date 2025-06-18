const http = require('http');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((req, res) => {
  res.statusCode = 200;             // code HTTP 200 = OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World !\n');       // réponse envoyée au client
});

server.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}/`);
});
