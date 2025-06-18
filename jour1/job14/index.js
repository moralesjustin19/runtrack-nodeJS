const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((req, res) => {
  let filePath = '';

  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about.html');
  } else {
    filePath = path.join(__dirname, 'error.html');  // Page d'erreur
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Erreur serveur (ex: fichier manquant)
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Erreur serveur');
    } else {
      // Statut 404 si page erreur, sinon 200
      if (filePath.endsWith('error.html')) {
        res.statusCode = 404;
      } else {
        res.statusCode = 200;
      }
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}/`);
});
