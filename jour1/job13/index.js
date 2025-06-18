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
    // Pour toute autre URL, on renvoie une erreur 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Page non trouvée');
    return;
  }

  // Lire le fichier demandé
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Erreur serveur');
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
