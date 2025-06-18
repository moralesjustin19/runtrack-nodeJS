const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((req, res) => {
  // Chemin vers index.html dans le même dossier que ce script
  const filePath = path.join(__dirname, 'index.html');

  // Lire le fichier index.html
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Erreur serveur : impossible de lire le fichier.');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}/`);
});
